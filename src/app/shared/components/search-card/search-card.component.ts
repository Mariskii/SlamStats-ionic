import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'player-search-card',
  templateUrl: './search-card.component.html',
  styleUrls: ['./search-card.component.scss'],
})
export class SearchCardComponent  implements OnInit {

  @Input() name?:string;
  @Input() imageURL?:string;

  constructor() { }

  ngOnInit() {}

}
