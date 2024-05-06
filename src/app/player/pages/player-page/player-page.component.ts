import { Component, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';
import { PlayerService } from '../../services/player.service';
import { PlayerTrophies } from '../../models/player-trphies.interface';
import { PlayerStats } from '../../models/player-stats.interface';
import { PlayerTeam } from '../../models/player-team.interface';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
})
export class PlayerPageComponent  implements OnInit {

  loading: boolean = true;
  status: string = 'stats';

  isFavorite:boolean = false;

  player?: Player;
  playerTrophies?: PlayerTrophies;
  playerStats?: PlayerStats[];
  playerTeams?: PlayerTeam[];

  constructor(
    private playerService:PlayerService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
  ) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe(({id}) => {
      this.getPlayerData(id);
    });
  }

  async getPlayerData(id: number) {
    await this.playerService.getPlayerById(id).subscribe(player => this.player = player);
    await this.playerService.getPlayerTeamsById(id).subscribe(teams => this.playerTeams = teams);
    await this.playerService.getPlayerStatsById(id).subscribe(stats => this.playerStats = stats);
    await this.playerService.getPlayerTrophiesById(id).subscribe(trophoies => this.playerTrophies = trophoies);
    this.loading = false;
  }

  favorite() {
    if(this.isFavorite) {
      this.isFavorite = false;
    }
    else {
      this.isFavorite = true;
    }
  }
}
