import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RecomendationCardComponent } from './components/recomendation-card/recomendation-card.component';
import { HomePageComponent } from './pages/home-page/home-page.component'
import {} from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchPageModule } from './pages/search-page/search-page.module';
import { PlayerRoutingModule } from './player-routing.module';



@NgModule({
  declarations: [
    HomePageComponent,
    RecomendationCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    NgOptimizedImage,
    FormsModule,
    HttpClientModule,
    SearchPageModule,
    PlayerRoutingModule,
    ]
})
export class PlayerModule { }
