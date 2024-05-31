import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';
import { PlayerPageComponent } from '../player-page/player-page.component';
import { ModalController } from '@ionic/angular';
import { PlayerService } from '../../services/player.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent  implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
