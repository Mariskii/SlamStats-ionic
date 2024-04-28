import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.scss'],
})
export class PlayerPageComponent  implements OnInit {

  status: string = 'stats';
  isTop = false;

  constructor() {}


  ngOnInit() {

  }
}
