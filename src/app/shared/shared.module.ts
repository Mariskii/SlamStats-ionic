import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AppTabComponent } from './components/app-tab/app-tab.component';



@NgModule({
  declarations: [AppTabComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[AppTabComponent]
})
export class SharedModule { }
