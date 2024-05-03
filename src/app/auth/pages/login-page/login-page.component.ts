import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  implements OnInit {

  formContent:string = 'login';

  public loginForm: FormGroup = this.fb.group({
    userName: ['',[Validators.required]],
    password: ['',[Validators.required]],
  });

  public registerForm: FormGroup = this.fb.group({
    userName: ['',[Validators.required]],
    email: ['',[Validators.required, Validators.email]],
    password: ['',[Validators.required]],
    password2: ['',[Validators.required]],
  });

  userName!: string;
  passwd!: string;
  errorMessage?: string;
  email?:string;

  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private authService: AuthService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    this.formContent = this.navParams.get('formContent');
  }

  login() {

    if(this.loginForm.valid) {

      this.authService.login(this.loginForm.get('userName')!.value, this.loginForm.get('password')!.value).pipe(
        catchError(error => this.errorMessage = error.error.message)
      ).subscribe();

    }

  }

  registerAccount() {
    if(this.registerForm.valid) {
      if(this.registerForm.get('password')!.value === this.registerForm.get('password2')!.value) {
        //TODO: IMPLEMENT REGISTER AT THE SERVICE
        this.authService.register({
          nombreUsuario: this.registerForm.get('userName')!.value,
          correo: this.registerForm.get('email')!.value,
          passwd: this.registerForm.get('password')!.value
        }).pipe(
          catchError(error => this.errorMessage = error.error.message)
        ).subscribe(
          // (response: any) => {
          //   console.log(response);
          // },
          // (error: any) => {
          //   console.error(error);
          //   if (error.error && error.error.message) {
          //     this.errorMessage = error.error.message;
          //   } else {
          //     this.errorMessage = 'Error desconocido';
          //   }
          // }
        );
      } else {
        this.errorMessage = 'Las contraseñas no coinciden';
      }

    }
  }

  toggleFormContent() {
    if(this.formContent === 'login') {
      this.formContent = 'register'
      this.loginForm.reset();
    } else {
      this.formContent = 'login'
      this.registerForm.reset();
    }
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

}
