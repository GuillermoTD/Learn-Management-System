import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import Cookies from 'js-cookie';

export const loginGuard: CanActivateFn = (route, state) => {
  const accessToken = Cookies.get('accessToken');
  const router = inject(Router);
  let redirectionUrl = '';

  // if (accessToken == undefined) {
  //   const Route_Attempted_Access = state.url;
  //   // if (Route_Attempted_Access != '/login') {
  //   //   // redirectionUrl = Route_Attempted_Access;
  //   //   // router.navigate([redirectionUrl]);
  //   //   // return true;  
  //   //   console.log(Route_Attempted_Access);
  //   // }

  //   router.navigate(['/']);
  //   return true;
  // }

  console.log('Hubo un fallo');
  return true;
};
