import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { catchError, Observable, tap, throwError } from 'rxjs';
import Cookies from 'js-cookie';
// import { CoursesDTO } from '../../../dto/CoursesDTO';

@Injectable({
  providedIn: 'root',
})
export class CookiesTokenService {
 
  static GetCookieToken():string{
    return Cookies.get('accessToken') || '';
  }
}
