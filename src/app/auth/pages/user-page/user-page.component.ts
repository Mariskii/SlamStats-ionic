import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserLogged } from '../../models/user.interface';
import { Player } from 'src/app/player/models/player.interface';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss'],
})
export class UserPageComponent  implements OnInit {

  user?:UserLogged;
  favPlayers?:Player[];

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.user = this.authService.user;
    this.authService.getFavoritePlayers().subscribe(players => this.favPlayers = players);
  }

}
