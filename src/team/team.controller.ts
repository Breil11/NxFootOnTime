import { Body, Controller, Post, Put, Param, Get } from '@nestjs/common';
import { CreateTeamDto, UpdateTeamDto } from './team.dto';
import { TeamService } from './team.service';
import { Team } from './team.entity';

@Controller('teams')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get()
  getAllTeams(): Promise<Team[]> {
    return this.teamService.getAllTeams();
  }
  @Post()
  createTeam(@Body() createTeamDto: CreateTeamDto) {
    return this.teamService.createTeam(createTeamDto);
  }

  @Put(':id')
  updateTeam(@Param('id') id: number, @Body() updateTeamDto: UpdateTeamDto) {
    return this.teamService.updateTeam(id, updateTeamDto);
  }
}
