import { TestBed } from '@angular/core/testing';
import { CanActivateFn, Router } from '@angular/router';

import { isLoggedGuard } from './is-logged.guard';
import { AuthService } from '../services/auth.service';

describe('isLoggedGuard', () => {

  const MockAuthService = {

  }

  const router = jasmine.createSpyObj('Router', ['navigate']);

  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => isLoggedGuard(...guardParameters));

    beforeEach(() => {
      TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthService,
          useValue: MockAuthService
        },
        {
          provide: Router,
          useValue: router
        },
       ]
      });
    });

  it('should be created', () => {
    console.log(executeGuard);

    const result = isLoggedGuard

    console.log(result);


    expect(executeGuard).toBeTruthy();
  });
});

