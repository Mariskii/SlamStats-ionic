import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  implements OnInit {

  userName!: string;
  passwd!: string;
  errorMessage?: string;

  constructor(
    private modalCtrl: ModalController,
    private authService: AuthService
  ) { }

  ngOnInit() {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  login() {

    if(this.userName && this.passwd) {

      this.authService.login(this.userName, this.passwd).pipe(
        catchError(error => this.errorMessage = error.message)
      ).subscribe();

    }

  }
}
