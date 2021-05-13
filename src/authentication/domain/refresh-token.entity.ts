import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

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

  @UpdateDateColumn()
  updatedAt: Date;
}