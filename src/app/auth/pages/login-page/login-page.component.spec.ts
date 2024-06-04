import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule, NavParams } from '@ionic/angular';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '../../services/auth.service';
import { of } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

fdescribe('LoginPageComponent', () => {

  const MockAuthService = {
    user: {
      name:''
    },
    login: () => of(
      {
        userName:''
      }
    ),

    register: () => of({
      value:{}
    })
  }

  const MockRouter = {
    navigate: () => of()
  }

  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let router: Router

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [IonicModule.forRoot()],
      providers: [
        {
          provide:AuthService,
          useValue:MockAuthService
        },
        {
          provide:Router,
          useValue:MockRouter
        },
        NavParams
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;

    router = TestBed.inject(Router);

    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login works correctly', () => {
    const spyRouterNavigate = spyOn(router, 'navigate');

    component.login('user','pass', new FormGroup({}));

    expect(spyRouterNavigate).toHaveBeenCalled();
  });

  it('registerAccount works correctly', () => {

    const spyRegister = spyOn(MockAuthService, 'register').and.callThrough();

    component.registerForm = new FormGroup({
      userName: new FormControl('user'),
      email: new FormControl('mail'),
      password: new FormControl('pass'),
      password2: new FormControl('pass'),
    });

    component.registerAccount();

    expect(spyRegister).toHaveBeenCalled();
  });

  it('toggleFormContent works correctly when formContent is register', () => {
    component.toggleFormContent();

    expect(component.formContent).toEqual('login');
  });

  it('toggleFormContent works correctly when formContent is login', () => {

    component.formContent = 'login'

    component.toggleFormContent();

    expect(component.formContent).toEqual('register');
  });
});
