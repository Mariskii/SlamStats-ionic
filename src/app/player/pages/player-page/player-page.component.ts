import { Component, OnDestroy, OnInit } from '@angular/core';
import { Player } from '../../models/player.interface';
import { PlayerService } from '../../services/player.service';
import { PlayerTrophies } from '../../models/player-trphies.interface';
import { PlayerStats } from '../../models/player-stats.interface';
import { PlayerTeam } from '../../models/player-team.interface';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { AlertController } from '@ionic/angular';
import { delay } from 'rxjs';
import { PlayerCache } from '../../models/player-cache.interface';

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
    private alertController: AlertController,
  ) {}

  ngOnInit() {

    if(!this.player) {
      this.activatedRoute.params.subscribe(({id}) => {
        this.playerService.getPlayerData(id).subscribe((data: PlayerCache) => {
          this.player = data.player;
          this.playerTrophies = data.trophies;
          this.playerStats = data.stats;
          this.playerTeams = data.teams;
          this.loading = false;
        });
      });
    }
  }

  toggleFavorite() {
    if(this.authService.user) {

      if(this.isFavorite) {

        this.playerService.deleteFavorite(this.player!.id).subscribe((response:any) => {


          if(response.status === 'CREATED') {
            this.isFavorite = false;
          } else {
            this.presentAlert('Ha ocurrido un error','No se ha podido eliminar de favoritos')
          }

        });

      }
      else {
        this.playerService.addFavorite(this.player!.id).subscribe((response:any) => {

          if(response.status === 'CREATED') {
            this.isFavorite = true;
          } else {
            this.presentAlert('Ha ocurrido un error','No se ha podido añadir a favoritos')
          }

        });

      }

    } else {
      this.presentAlert('Acción restringida', 'Para añadir un jugador a favoritos debes iniciar sesión');
    }
  }

  async presentAlert(alertHeader:string, alertMessage: string) {
    const alert = await this.alertController.create({
      header: alertHeader,
      message: alertMessage,
      buttons: ['Ok'],
    });

    await alert.present();
  }
}
