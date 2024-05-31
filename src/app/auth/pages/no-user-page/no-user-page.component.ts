import { Component, OnInit, Optional } from '@angular/core';
import { IonRouterOutlet, ModalController, Platform } from '@ionic/angular';
import { LoginPageComponent } from '../login-page/login-page.component';
import { App } from '@capacitor/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-user-page',
  templateUrl: './no-user-page.component.html',
  styleUrls: ['./no-user-page.component.scss'],
})
export class NoUserPageComponent  implements OnInit {

  constructor(
    private modalControler:ModalController,
    //private router: Router,
    //private platform: Platform,
    @Optional() private routerOutlet?: IonRouterOutlet
  ) {
    // this.platform.backButton.subscribeWithPriority(-1, () => {
    //   if (!this.routerOutlet?.canGoBack()) {
    //     App.exitApp();
    //   }
    // });
  }

  ngOnInit() {
    //this.routerOutletCanGoBack()
  }

  async openModal(formInfo: string) {
    const modal = await this.modalControler.create({
      component: LoginPageComponent,
      componentProps: {
        formContent: formInfo
      }
    });
    await modal.present();
  }

  // private routerOutletCanGoBack() {
  //   // Verificar si hay una página anterior en el historial de navegación
  //   this.router.navigate(['back'], { skipLocationChange: true }).then(() => {
  //     const hasPreviousPage = this.router.url !== '/tabs';
  //     if (!hasPreviousPage) {
  //       // Si no hay una página anterior en el historial, salir de la aplicación
  //       App.exitApp();
  //     }
  //   });
  // }
}
