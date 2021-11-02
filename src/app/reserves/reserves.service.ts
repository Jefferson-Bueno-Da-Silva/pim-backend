import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageHelper } from 'src/helpers/messages.helper';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { Reserve } from './entities/reserve.entity';

@Injectable()
export class ReservesService {
  constructor(
    @InjectRepository(Reserve)
    private readonly reserveRepo: Repository<Reserve>,
  ) {}

  async findAll(req: any, q: any) {
    return await this.reserveRepo.find({
      relations: ['room'],
      where: { id_user: req?.user.id, ...q },
    });
  }

  async create(createReserveDto: CreateReserveDto, req: any) {
    await this.findOneOrFail({ id_user: createReserveDto.id_user }, {}, req);

    const newReserve = this.reserveRepo.create({
      ...createReserveDto,
      id_user: req?.user.id,
    });

    return this.reserveRepo.save(newReserve);
  }

  async findOneOrFail(
    conditions: FindConditions<Reserve>,
    options?: FindOneOptions<Reserve>,
    req?: any,
  ) {
    if (!!req?.user.id && req?.user.id !== conditions.id_user)
      throw new UnauthorizedException(MessageHelper.PERMISSION_UNAUTHORIZED);
    try {
      return await this.reserveRepo.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async update(id: number, updateReserveDto: UpdateReserveDto, req: any) {
    const reserve = await this.findOneOrFail({ id_reserva: id });

    if (!!req?.user.id && req?.user.id !== reserve.id_user) {
      throw new UnauthorizedException(MessageHelper.PERMISSION_UNAUTHORIZED);
    }

    this.reserveRepo.merge(reserve, updateReserveDto);
    return this.reserveRepo.save(reserve);
  }

  async remove(id: number, req?: any) {
    try {
      const find = await this.findOneOrFail({ id_reserva: id });
      if (!!req?.user.id && req?.user.id !== find.id_user) {
        throw new UnauthorizedException(MessageHelper.PERMISSION_UNAUTHORIZED);
      }
      return await this.reserveRepo.delete({ id_reserva: id });
    } catch (error) {
      console.log('deu erro', error);
      return error.response;
    }
  }
}
