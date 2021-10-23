import { Room } from 'src/app/rooms/entities/room.entity';
import { Users } from 'src/app/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'reservas', synchronize: false })
export class Reserve {
  @PrimaryGeneratedColumn()
  id_reserva: number;

  @Column('timestamp without time zone')
  data_entrada: Date;

  @Column('timestamp without time zone')
  data_saida: Date;

  @ManyToOne((type) => Room)
  @JoinColumn({
    name: 'id_quarto',
    referencedColumnName: 'id',
  })
  room: Room;

  @Column()
  id_user: number;
}
