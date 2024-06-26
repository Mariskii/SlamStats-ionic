import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { catchError, throwError } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent  implements OnInit {

  formContent!:string;

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
    private navParams: NavParams,
    private router: Router
  ) { }

  ngOnInit() {
    this.formContent = this.navParams.get('formContent');
  }

  login(username:string, password:string, form:FormGroup) {

    if(form.valid) {

      this.authService.login(username, password).pipe(
        catchError(error => this.errorMessage = error.error.message)
      ).subscribe( () => {
        if(this.authService.user) {
          this.router.navigate(['./user']);
          this.cancel();
        }
      });
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
        ).subscribe(() => {
          this.login(this.registerForm.get('userName')!.value, this.registerForm.get('password')!.value, this.registerForm);
        });
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
