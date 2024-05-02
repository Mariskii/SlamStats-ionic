import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPageComponent } from './search-page.component';
import { PlayerPageComponent } from '../player-page/player-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SearchPageComponent
      },
      {
        path:'player/:id',
        component: PlayerPageComponent
      },
      {
        path:'**',
        redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchRoutingModule { }
