import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty } from 'class-validator';
import { CreateReserveDto } from './create-reserve.dto';

export class UpdateReserveDto extends PartialType(CreateReserveDto) {
  @IsNotEmpty()
  checkin: boolean;
}
