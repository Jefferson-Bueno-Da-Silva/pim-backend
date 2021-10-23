import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'reservas', synchronize: false })
export class Reserve {
  @PrimaryGeneratedColumn()
  id_reserva: number;

  @Column('timestamp without time zone')
  data_entrada: Date;

  @Column('timestamp without time zone')
  data_saida: Date;

  @Column()
  id_quarto: number;

  @Column()
  id_cliente: number;

  @Column()
  id_funcionario: number;

  @Column()
  id_user: number;
}
