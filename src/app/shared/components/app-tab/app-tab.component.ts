import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './app-tab.component.html',
  styleUrls: ['./app-tab.component.scss'],
})
export class AppTabComponent  implements OnInit {

  currentTab: string = 'home';

  constructor() { }

  ngOnInit() {

  }

  setCurrentTab(ev: any) {
    this.currentTab = ev.tab;
  }

}
