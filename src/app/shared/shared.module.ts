import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppTabComponent } from './components/app-tab/app-tab.component';
import { SearchCardComponent } from './components/search-card/search-card.component';



@NgModule({
  declarations: [
    AppTabComponent,
    SearchCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    AppTabComponent,
    SearchCardComponent,
  ]
})
export class SharedModule { }
