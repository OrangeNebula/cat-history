import {
  Column,
  CreateDateColumn,
  DeleteDateColumn, Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Cat } from './cat.entity';

@Entity()
export class CatImage {
  constructor(
    name: string,
    path: string,
    size: number,
    cat?: Cat,
  ) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.cat = cat;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 1024 })
  name: string;

  @Column({ length: 2048 })
  path: string;

  @Column('int')
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => Cat, cat => cat.images, { cascade: true })
  cat: Cat;
}