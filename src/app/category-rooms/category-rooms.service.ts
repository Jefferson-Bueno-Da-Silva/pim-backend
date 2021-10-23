import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryRoom } from './entities/category-room.entity';

@Injectable()
export class CategoryRoomsService {
  constructor(
    @InjectRepository(CategoryRoom)
    private CategoryRoomRepo: Repository<CategoryRoom>,
  ) {}
  async findAll() {
    return await this.CategoryRoomRepo.find();
  }
}
