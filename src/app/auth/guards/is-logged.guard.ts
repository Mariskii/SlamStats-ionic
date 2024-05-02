import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isLoggedGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const isLogged = authService.user? true: false;

  if (!isLogged) {
    router.navigate(['./user/guest']);
  }

  return isLogged;

};
