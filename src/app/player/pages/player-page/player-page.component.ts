import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { Player } from '../../models/player.interface';
import { PlayerService } from '../../services/player.service';
import { PlayerTrophies } from '../../models/player-trphies.interface';
import { PlayerStats } from '../../models/player-stats.interface';
import { PlayerTeam } from '../../models/player-team.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
})
export class PlayerPageComponent  implements OnInit {

  loading: boolean = false;
  status: string = 'stats';

  player: Player = {
    id:             1,
    nombreCompleto: 'string',
    nacionalidad:   'string',
    altura:         'string',
    peso:           'string',
    posicion:       'string',
    dorsal:         'string',
    fotoCabeza:     'string',
    fotoCompleta:   'https://tse2.mm.bing.net/th?id=OIP.COim6Jrrs0tXxo8chzO1twHaE7&pid=Api&P=0&h=180',
    fnacimiento:    new Date(),
  };
  playerTrophies!: PlayerTrophies;
  playerStats!: PlayerStats[];
  playerTeams!: PlayerTeam[];

  constructor(
    private playerService:PlayerService,
    private activatedRoute: ActivatedRoute,
  ) {}


  ngOnInit() {
    this.loading = true;

    this.activatedRoute.params.subscribe(({id}) => {
      this.getPlayerData(id);
      this.loading = false;
    });
  }

  getPlayerData(id: number) {
    this.playerService.getPlayerById(id).subscribe(player => this.player = player);
    this.playerService.getPlayerTeamsById(id).subscribe(teams => this.playerTeams = teams);
    this.playerService.getPlayerStatsById(id).subscribe(stats => this.playerStats = stats);
  }
}
