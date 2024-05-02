import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './player/pages/home-page/home-page.component';

const routes: Routes = [
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'search',
    loadChildren: () => import('./player/pages/search-page/search-page.module').then(m => m.SearchPageModule)
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
