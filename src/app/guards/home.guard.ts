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
  // const accessToken = Cookies.get('accessToken');
  // const router = inject(Router)

  // if (!accessToken) {
  //   router.navigate(['/login']);
  //   return false;
  // }

  return true;
};
