import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Cookies from 'js-cookie';

export const loginGuard: CanActivateFn = (route, state) => {
  const accessToken = Cookies.get('accessToken');
  const router = inject(Router);

  if (accessToken != undefined) {
    console.log('el token ya ta creao');
    router.navigate(['/']);
    return false;
  }

  console.log('el token aun no ta creao');
  return true;
};
