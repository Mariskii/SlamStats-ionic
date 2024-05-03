import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginPageComponent } from '../login-page/login-page.component';

@Component({
  selector: 'app-no-user-page',
  templateUrl: './no-user-page.component.html',
  styleUrls: ['./no-user-page.component.scss'],
})
export class NoUserPageComponent  implements OnInit {

  constructor(private modalControler:ModalController) { }

  ngOnInit() {}

  async openModal(formInfo: string) {
    const modal = await this.modalControler.create({
      component: LoginPageComponent,
      componentProps: {
        formContent: formInfo
      }
    });

    await modal.present();
  }
}
