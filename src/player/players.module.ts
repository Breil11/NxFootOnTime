import { Module } from '@nestjs/common';
import { PlayerService } from './player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from './player.entity';
import { PlayerController } from './player.controller';
import { TeamModule } from '../team/team.module';
import { Team } from '../team/team.entity';
import { TeamService } from '../team/team.service';

@Module({
  providers: [PlayerService, TeamService],
  imports: [TypeOrmModule.forFeature([Player, Team]), TeamModule],
  controllers: [PlayerController],
})
export class PlayersModule {}
