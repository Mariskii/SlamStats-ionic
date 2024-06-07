import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

const exceptedLoginResult = {
  id:            1,
  nombreUsuario: 'string',
  correo:        'string',
}

const exceptRegisterResult = {
  nombreUsuario: 'string',
  correo:        'string',
  passwd:        'string',
}

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthService,
      ],
    }).compileComponents();

    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login works correctly', () => {
    service.login('user','passwd').subscribe((res) => {
      expect(res)
    });

    const req = httpMock.expectOne(`${environment.API_URL}/user/login?userName=user&passwd=passwd`);

    req.flush(exceptedLoginResult);
  });

  it('logout works correctly', () => {
    service.logout();

    expect(service.user).toBeFalsy();
  });

  it('getFavoritePlayers works correctly', () => {

    service.user = {
      id:            1,
      nombreUsuario: 'user',
      correo:        'user',
    }

    service.getFavoritePlayers().subscribe((res) => {
      expect(res).toEqual([]);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/user/1/favoritePlayers`);

    req.flush([]);
  });

  it('register works correctly', () => {

    const userRegister = {
      nombreUsuario: 'string',
      correo:        'string',
      passwd:        'string',
    }

    service.register(userRegister).subscribe((res) => {
      expect(res).toEqual(exceptRegisterResult);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/user/register`);

    req.flush(userRegister);
  });
});
