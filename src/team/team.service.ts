import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';
import { CreateTeamDto, UpdateTeamDto } from './team.dto';

@Injectable()
export class TeamService {
  constructor(
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async getAllTeams(): Promise<Team[]> {
    return await this.teamRepository.find();
  }
  createTeam(createTeamDto: CreateTeamDto) {
    const team = this.teamRepository.create(createTeamDto);
    return this.teamRepository.save(team);
  }

  updateTeam(id: number, updateTeamDto: UpdateTeamDto) {
    return this.teamRepository.update(id, updateTeamDto);
  }
  async getTeamById(id: number): Promise<Team> {
    return await this.teamRepository.findOne({ where: { id } });
  }
}
