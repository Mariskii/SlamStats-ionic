import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-team-card',
  templateUrl: './player-team-card.component.html',
  styleUrls: ['./player-team-card.component.scss'],
})
export class PlayerTeamCardComponent  implements OnInit {

  @Input() teamLogo!:string;
  @Input() teamName!:string;

  constructor() { }

  ngOnInit() {}

}
