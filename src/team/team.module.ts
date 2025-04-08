import { Module } from '@nestjs/common';
import { TeamService } from './team.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './team.entity';
import { TeamController } from './team.controller';

@Module({
  providers: [TeamService],
  imports: [TypeOrmModule.forFeature([Team])],
  controllers: [TeamController],
})
export class TeamModule {}
