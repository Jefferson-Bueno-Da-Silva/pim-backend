import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
} from '@nestjs/common';
import { ReservesService } from './reserves.service';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { UpdateReserveDto } from './dto/update-reserve.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('reserves')
@UseGuards(AuthGuard('jwt'))
export class ReservesController {
  constructor(private readonly reservesService: ReservesService) {}

  @Get()
  findAll(@Req() req: any, @Query() q: any) {
    return this.reservesService.findAll(req, q);
  }

  @Post()
  create(@Body() createReserveDto: CreateReserveDto, @Req() req: any) {
    return this.reservesService.create(createReserveDto, req);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReserveDto: UpdateReserveDto,
    @Req() req: any,
  ) {
    return this.reservesService.update(+id, updateReserveDto, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: any) {
    return this.reservesService.remove(+id, req);
  }
}
