import { Room } from 'src/app/rooms/entities/room.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categoria_quarto', synchronize: false })
export class CategoryRoom {
  @PrimaryGeneratedColumn({ name: 'id_categoria_quarto' })
  id: number;

  @Column({ name: 'nome_categoria_quarto' })
  categoryName: string;

  @Column({ name: 'qtd_camas' })
  qtyBeds: number;

  @Column({ name: 'valor_categoria_quarto' })
  value: number;

  @OneToMany((type) => Room, (room) => room.roomCategory)
  rooms: Room[];
}
