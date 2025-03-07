import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Cookies from 'js-cookie';

export const coursesGuard: CanActivateFn = (route, state) => {
  const accessToken = Cookies.get('accessToken');
  const router = inject(Router);

  if (accessToken != undefined) {
    console.log(state);
    // router.navigate([`${state.url}`]);
    return true;
  }

  console.log('el token aun no ta creao');
  return false;
};
