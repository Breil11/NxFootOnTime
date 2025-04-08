import { Player } from '../player/player.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TeamI } from './team.interface';

@Entity()
export class Team implements TeamI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Player, (player) => player.team)
  players: Player[];
}
