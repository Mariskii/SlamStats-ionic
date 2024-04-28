import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './player/pages/home-page/home-page.component';
import { SearchPageComponent } from './player/pages/search-page/search-page.component';
import { PlayerPageComponent } from './player/pages/player-page/player-page.component';

const routes: Routes = [
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'search',
    component:SearchPageComponent
  },
  {
    path:'player/:id',
    component: PlayerPageComponent
  },
  {
    path:'**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
