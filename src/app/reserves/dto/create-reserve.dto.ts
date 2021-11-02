import { IsNotEmpty } from 'class-validator';

export class CreateReserveDto {
  @IsNotEmpty()
  data_entrada: string;

  @IsNotEmpty()
  data_saida: string;

  @IsNotEmpty()
  id_quarto: number;

  @IsNotEmpty()
  id_user: number;
}
