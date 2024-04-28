import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trophie-component',
  templateUrl: './trophie-component.component.html',
  styleUrls: ['./trophie-component.component.scss'],
})
export class TrophieComponent  implements OnInit {

  @Input() trophieImage!: string;
  @Input() trophieQuantity!: string;

  constructor() { }

  ngOnInit() {}

}
