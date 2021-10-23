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
  numberRoom: string;

  @Column({ name: 'qtd_pessoas' })
  howManyPeople: number;

  @Column({ name: 'id_categoria_quarto' })
  roomCategoryId: number;

  @Column({ name: 'descricao' })
  description: string;

  // @ManyToOne((type) => RoomCategory, (roomCategory) => roomCategory.rooms)
  // roomCategory: RoomCategory;
}
