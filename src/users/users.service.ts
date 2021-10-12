import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';
import { GetUser } from 'src/Decorators';
import { MessageHelper } from 'src/helpers/messages.helper';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  async findAll() {
    return await this.userRepo.find({ select: ['id', 'name', 'email'] });
  }

  async findOneOrFail(
    conditions: FindConditions<Users>,
    options?: FindOneOptions<Users>,
    req?: any,
  ) {
    if (!!req?.user.id && req?.user.id !== conditions.id)
      throw new UnauthorizedException(MessageHelper.PERMISSION_UNAUTHORIZED);
    try {
      return await this.userRepo.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepo.create(createUserDto);
    return this.userRepo.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto, req?: any) {
    const user = await this.findOneOrFail(
      { id },
      { select: ['id', 'name', 'email'] },
      req,
    );
    this.userRepo.merge(user, updateUserDto);
    return this.userRepo.save(user);
  }

  async remove(id: number, req?: any) {
    try {
      await this.findOneOrFail({ id }, { select: ['id'] }, req);
      return await this.userRepo.delete(id);
    } catch (error) {
      return error.response;
    }
  }
}
