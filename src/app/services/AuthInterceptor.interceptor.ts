import { inject, Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpEvent,
  HttpErrorResponse,
  HttpHandlerFn,
  HttpEventType,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from './AuthService.service'; // Tu servicio de autenticación
import { Router } from '@angular/router';
import * as Cookies from 'js-cookie';


export function AuthInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) {
  // Obtener instancias de AuthService y Router mediante `inject()`
  const authService = inject(AuthService);
  const router = inject(Router);

  // Interceptar la solicitud HTTP
  return next(req).pipe(
    catchError((error) => handleError(error, req, next, authService, router))
  );
}

function handleError(
  error: any,
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService,
  router: Router
): Observable<HttpEvent<any>> {
  // Si el error es un 401 (Unauthorized), significa que el token ha expirado
  if (error.status === 401) {
    return handleTokenExpired(req, next, authService, router);
  }

  // Si el error no es un 401, simplemente lo propagamos
  return throwError(error);
}

// Manejar el caso cuando el token ha expirado
function handleTokenExpired(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  authService: AuthService,
  router: Router
): Observable<HttpEvent<any>> {
  console.log('Token expirado, intentando refrescar...');

  return authService.refreshToken().pipe(
    switchMap((response: any) => retryRequestWithNewToken(req, next, response.token, authService)),
    catchError((err) => handleRefreshTokenFailure(err, router))
  );
}

// Reintentar la solicitud original con el nuevo token
function retryRequestWithNewToken(
  req: HttpRequest<any>,
  next: HttpHandlerFn,
  newToken: string,
  authService: AuthService
): Observable<HttpEvent<any>> {
  // Guardar el nuevo token en las cookies
  authService.setToCookieToken(newToken);

  // Clonar la solicitud original y añadir el nuevo token al encabezado
  const clonedRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${newToken}`,
    },
  });

  return next(clonedRequest);
}

// Manejar el error si el refresh token falla
function handleRefreshTokenFailure(error: any, router: Router): Observable<never> {
  console.log('No se pudo refrescar el token, redirigiendo al login');
  // Redirigir al usuario al login si no se pudo refrescar el token
  router.navigate(['/login']);
  return throwError(error);
}

