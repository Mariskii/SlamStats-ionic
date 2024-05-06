import { PlayerStats } from "./player-stats.interface";
import { PlayerTeam } from "./player-team.interface";
import { PlayerTrophies } from "./player-trphies.interface";
import { Player } from "./player.interface";

export interface PlayerCache {
  player: Player;
  stats: PlayerStats[];
  trophies: PlayerTrophies;
  teams: PlayerTeam[];
}
