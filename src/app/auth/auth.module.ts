import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { IonicModule } from '@ionic/angular';
import { NoUserPageComponent } from './pages/no-user-page/no-user-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';



@NgModule({
  declarations: [
    NoUserPageComponent,
    UserPageComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    IonicModule,
  ]
})
export class AuthModule { }
