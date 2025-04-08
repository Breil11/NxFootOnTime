import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';
import { PlayerService } from './player.service';
import { CreatePlayerDto, UpdatePlayerDto } from './player.dto';
import { Player } from './player.entity';
import { UpdateTeamDto } from '../team/team.dto';

@Controller('players')
export class PlayerController {
  constructor(private playerService: PlayerService) {}

  @Get()
  getAllPlayers(): Promise<Player[]> {
    return this.playerService.getAllPlayers();
  }

  @Post()
  createPlayer(@Body() createPlayerDto: CreatePlayerDto): Promise<Player> {
    return this.playerService.createPlayer(createPlayerDto);
  }

  @Get(':id')
  getPlayerById(@Param('id') id: number): Promise<Player> {
    return this.playerService.getPlayerById(id);
  }

  @Put(':id')
  updatePlayer(
    @Param('id') id: number,
    @Body() updatePlayerDto: UpdatePlayerDto,
  ): Promise<Player> {
    return this.playerService.updatePlayer(id, updatePlayerDto);
  }
  @Put(':id')
  updatePartialPlayer(
    @Param('id') id: number,
    @Body() updatePlayerDto: Partial<UpdatePlayerDto>,
  ): Promise<Player> {
    const teamId = 1;
    const updateTeamDto: UpdateTeamDto = {};
    return this.playerService.updatePlayerTeam(
      id,
      teamId,
      updatePlayerDto,
      updateTeamDto,
    );
  }
}
