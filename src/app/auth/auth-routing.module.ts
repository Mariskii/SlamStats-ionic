import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { NoUserPageComponent } from './pages/no-user-page/no-user-page.component';
import { isLoggedGuard } from './guards/is-logged.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path:'',
        component: UserPageComponent,
        canActivate: [isLoggedGuard]
      },
      {
        path: 'guest',
        component: NoUserPageComponent
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
export class AuthRoutingModule { }
