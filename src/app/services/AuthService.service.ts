import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserDTO } from '../dto/UserDTO';
import { LoginDTO } from '../dto/LoginDTO';
import { UserStateService } from '../state/UserState.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:5007/login';

  constructor(private http: HttpClient, private userState: UserStateService) {}

  Login(loginRequest: LoginDTO): Observable<UserDTO> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200',
    });

    // console.log('Se empieza a llamar la api');
    return this.http
      .post<UserDTO>(`${this.apiUrl}`, loginRequest, {
        headers,
        withCredentials: true,
      })
      .pipe(
        catchError((error) => {
          console.error('No se pudo traer los datos:', error);
          return throwError(() => new Error('Error en la autenticación'));
        })
      );
  }

  handleLoginSuccess(user: UserDTO) {
    console.log('Dato capturado', user);
    this.userState.setUSer(user);
  }

  //establece el estado del usuario como null para que la sesion sea cerrada
  logout() {
    this.userState.clearUser();
  }
}
