import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CatImage } from './cat-image.entity';

@Entity()
export class Cat {
  constructor(
    name: string,
    description: string,
    images?: CatImage[],
  ) {
    this.name = name;
    this.description = description;
    this.images = images;
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column('text')
  description: string;

  @OneToMany(() => CatImage, catImage => catImage.cat)
  images: CatImage[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}