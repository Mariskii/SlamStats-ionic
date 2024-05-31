import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-recomendation-card',
  templateUrl: './recomendation-card.component.html',
  styleUrls: ['./recomendation-card.component.scss'],
})
export class RecomendationCardComponent  implements OnInit {

  @Input() playerName!:string;
  @Input() playerImage!:string;

  constructor() { }

  ngOnInit() {}

}
