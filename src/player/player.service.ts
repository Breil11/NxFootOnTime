import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateTeamDto } from '../team/team.dto';
import { Player } from './player.entity';
import { CreatePlayerDto, UpdatePlayerDto } from './player.dto';
import { TeamService } from '../team/team.service';
import { Team } from '../team/team.entity';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    private teamService: TeamService,
    @InjectRepository(Team)
    private teamRepository: Repository<Team>,
  ) {}

  async createPlayer(createPlayerDto: CreatePlayerDto): Promise<Player> {
    const player = this.playerRepository.create(createPlayerDto);
    return this.playerRepository.save(player);
  }

  async getAllPlayers(): Promise<Player[]> {
    return this.playerRepository.find();
  }

  async getPlayerById(id: number): Promise<Player> {
    const player = await this.playerRepository.findOne({ where: { id } });
    if (!player) {
      throw new NotFoundException(`The player with ${id} not found`);
    }
    return player;
  }

  async updatePlayer(
    id: number,
    updatePlayerDto: Partial<UpdatePlayerDto>,
  ): Promise<Player> {
    const player = await this.getPlayerById(id);
    Object.assign(player, updatePlayerDto);
    return this.playerRepository.save(player);
  }

  async deletePlayer(id: number): Promise<void> {
    const result = await this.playerRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`The player with ${id} not found`);
    }
  }
  async updatePlayerTeam(
    playerId: number,
    teamId: number,
    updatePlayerDto: Partial<UpdatePlayerDto>,
    updateTeamDto: UpdateTeamDto,
  ): Promise<Player> {
    const player = await this.getPlayerById(playerId);

    Object.assign(player, updatePlayerDto);

    await this.playerRepository.save(player);

    const team = await this.teamService.getTeamById(teamId);
    this.teamRepository.update(team, updateTeamDto);
    await this.teamRepository.save(team);

    return player;
  }
}
