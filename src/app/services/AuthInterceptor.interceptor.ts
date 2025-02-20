import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { AuthService } from './AuthService.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private AuthService: AuthService, private router: Router) {}

  InterceptRequest(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.AuthService.getCookieToken(); //obtenemos el token

    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

    return next.handle(clonedRequest).pipe(
        catchError((error: HttpErrorResponse) => {
          // Si obtenemos un error 401 (token expirado), intentamos refrescar el token
          if (error.status === 401) {
            console.log('Token expirado, intentando refrescar...');
            return this.AuthService.refreshToken().pipe(
              switchMap((response: any) => {
                // Si se refresca el token, lo almacenamos y reintentamos la solicitud original
                this.AuthService.setToCookieToken(response.accessToken);
                const newRequest = clonedRequest.clone({
                  setHeaders: {
                    Authorization: `Bearer ${response.accessToken}`,
                  },
                });
                return next.handle(newRequest);  // Devolvemos la solicitud con el nuevo token
              }),
              catchError((error) => {
                // Si no se puede refrescar el token, redirigimos al login
                console.log('No se pudo refrescar el token, redirigiendo al login');
                this.router.navigate(['/login']);
                return throwError(error);  // Propagar el error
              })
            );
          } else {
            return console.log(error);  // Si no es un error 401, lo propagamos
          }
        })
      );
  }
}
