import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export enum RefreshTokenStatus {
  Available = 'available',
  Deprecated = 'deprecated',
}

@Entity()
export class RefreshToken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  token: string;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}