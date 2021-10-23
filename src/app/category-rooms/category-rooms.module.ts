import { Module } from '@nestjs/common';
import { CategoryRoomsService } from './category-rooms.service';
import { CategoryRoomsController } from './category-rooms.controller';
import { CategoryRoom } from './entities/category-room.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRoom])],
  controllers: [CategoryRoomsController],
  providers: [CategoryRoomsService],
})
export class CategoryRoomsModule {}
