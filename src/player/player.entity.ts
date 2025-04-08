import { Team } from '../team/team.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PlayerI } from './player.interfaces';

@Entity()
export class Player implements PlayerI {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column()
  teamId: number;

  @Column({ nullable: true })
  number: number;

  @ManyToOne(() => Team, (team) => team.players)
  team: Team;
}
