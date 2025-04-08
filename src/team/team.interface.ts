import { PlayerI } from '../player/player.interfaces';

export interface TeamI {
  id: number;
  name: string;
  player?: PlayerI[];
}
