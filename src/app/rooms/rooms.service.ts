import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  Connection,
  FindConditions,
  FindOneOptions,
  Repository,
} from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(@InjectRepository(Room) private roomsRepo: Repository<Room>) {}

  async findAll() {
    return await this.roomsRepo.find();
  }

  async findOne(
    conditions: FindConditions<Room>,
    options?: FindOneOptions<Room>,
  ) {
    try {
      return await this.roomsRepo.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }
}
