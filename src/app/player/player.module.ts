import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { PlayerRoutingModule } from './player-routing.module';
import { IonicModule } from '@ionic/angular';
import { RecomendationCardComponent } from './components/recomendation-card/recomendation-card.component';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import {} from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { TrophieComponent } from './components/trophie-component/trophie-component.component';



@NgModule({
  declarations: [
    HomePageComponent,
    SearchPageComponent,
    PlayerPageComponent,
    RecomendationCardComponent,
    SearchCardComponent,
    TrophieComponent
  ],
  imports: [
    CommonModule,
    PlayerRoutingModule,
    IonicModule,
    NgOptimizedImage,
    FormsModule,
    ]
})
export class PlayerModule { }
