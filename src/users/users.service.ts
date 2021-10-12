import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/user.entity';
import { FindConditions, FindOneOptions, Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(Users) private userRepo: Repository<Users>) {}

  async findAll() {
    return await this.userRepo.find({ select: ['id', 'name', 'email'] });
  }

  async findOneOrFail(
    conditions: FindConditions<Users>,
    options?: FindOneOptions<Users>,
  ) {
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOneOrFail({ id });
    this.userRepo.merge(user, updateUserDto);
    return this.userRepo.save(user);
  }

  async remove(id: number) {
    this.findOneOrFail({ id });
    return await this.userRepo.delete(id);
  }
}
