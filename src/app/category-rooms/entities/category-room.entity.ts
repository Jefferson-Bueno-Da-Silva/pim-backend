import { Room } from 'src/app/rooms/entities/room.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categoria_quarto', synchronize: false })
export class CategoryRoom {
  @PrimaryGeneratedColumn({ name: 'id_categoria_quarto' })
  id: number;

  @Column({ name: 'nome_categoria_quarto' })
  nameCategory: string;

  @Column({ name: 'qtd_camas' })
  quantityBeds: number;

  @Column({ name: 'valor_categoria_quarto', type: 'numeric' })
  ValueCategoryRoom: number;

  // @OneToMany((type) => Room, room => room.roomCategory)
  // rooms: Room[];
}
