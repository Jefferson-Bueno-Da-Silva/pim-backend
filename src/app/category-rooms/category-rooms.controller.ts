import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CategoryRoomsService } from './category-rooms.service';

@Controller('category-rooms')
@UseGuards(AuthGuard('jwt'))
export class CategoryRoomsController {
  constructor(private readonly categoryRoomsService: CategoryRoomsService) {}

  @Get()
  findAll() {
    return this.categoryRoomsService.findAll();
  }
}
