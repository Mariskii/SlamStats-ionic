import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

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

  it('should be created', async () => {

    let mockSnapshot:any = jasmine.createSpyObj<RouterStateSnapshot>("RouterStateSnapshot", ['toString']);

    const result = await TestBed.runInInjectionContext(() => isLoggedGuard(new ActivatedRouteSnapshot(),mockSnapshot));
    console.log(result);


    expect(executeGuard).toBeTruthy();
  });
});

