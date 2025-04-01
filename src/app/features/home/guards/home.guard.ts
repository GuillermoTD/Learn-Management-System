import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import Cookies from 'js-cookie';

export const homeGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot, // Activar la ruta
  state: RouterStateSnapshot,   // Estado de la ruta
) => {
  const accessToken = Cookies.get('accessToken');
  const router = inject(Router)


  if (accessToken != undefined) {
    return true;
  }

  router.navigate(['/login']);
  console.log(state);

  return false;
};
