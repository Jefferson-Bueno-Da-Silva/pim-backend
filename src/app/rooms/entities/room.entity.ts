import { CategoryRoom } from 'src/app/category-rooms/entities/category-room.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity({ name: 'quartos', synchronize: false })
export class Room {
  @PrimaryGeneratedColumn({ name: 'id_quarto' })
  id: number;

  @Column({ name: 'numero_quarto' })
  roomNumber: string;

  @Column({ name: 'qtd_pessoas' })
  howManyPeople: number;

  @Column({ name: 'id_categoria_quarto' })
  categoryId: number;

  @Column({ name: 'descricao' })
  description: string;

  @ManyToOne((type) => CategoryRoom, (roomCategory) => roomCategory.rooms)
  @JoinColumn({
    name: 'id_categoria_quarto',
    referencedColumnName: 'id',
  })
  roomCategory: CategoryRoom;
}
