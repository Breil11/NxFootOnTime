import { TeamI } from '../team/team.interface';

export interface PlayerI {
  id: number;
  name: string;
  position: string;
  number?: number;
  teamId: number;
  team: TeamI;
}
