import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { UserDTO } from '../dto/UserDTO';
import { LoginDTO } from '../dto/LoginDTO';
import { UserStateService } from '../state/UserState.service';
import Cookies from 'js-cookie';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5007/login';

  constructor(private http: HttpClient, private userState: UserStateService) {
    
  }

  Login(loginCredentials: LoginDTO): Observable<UserDTO> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });

    // console.log('Se empieza a llamar la api');
    return this.http
      .post<UserDTO>(`${this.apiUrl}`, loginCredentials, {
        headers,
        withCredentials: true,
      })
      .pipe(
        tap((response) => {
          //Se establece el token en el cookie
          this.setToCookieToken(response.token);
          console.log("usuario logueado")

        }),
        catchError((error) => {
          console.error(error);
          return throwError(() => new Error('Error en la autenticación'));
        })
      );
  }

  handleLoginSuccess(user: UserDTO) {
    console.log('Dato capturado', user);
    this.userState.setUSer(user);
  }

  //Obtenemos el token del navegador en caso de que este exista
  getCookieToken(): string {
    return Cookies.get('accessToken') || '';
  }

  //Seteamos el token en el navegador
  setToCookieToken(token: string): void {
    Cookies.set('accessToken', token, {
      expires: 1,
      secure: true,
      sameSite: 'Strict',
    });
  }

  refreshToken(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/refresh-token`, {});
  }

  //establece el estado del usuario como null para que la sesion sea cerrada
  logout() {
    this.userState.clearUser();
  }
}
