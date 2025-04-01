import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import Cookies from 'js-cookie';
import { CoursesDTO } from '../../../dto/CoursesDTO';
import { CookiesTokenService } from '../../../services/CookiesTokenService.service';

@Injectable({
  providedIn: 'root',
})
export class HomeSearcCourse {
  pageNumber: number = 1;
  pageSize: number = 10;
  apiUrl = `http://localhost:5007/courses`;
  TokenCookie: string = '';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    Authorization: `Bearer ${CookiesTokenService.GetCookieToken()}`,
  });

  constructor(private http: HttpClient) {}

  ngOnInit(){
  }

  FetchCourses(): Observable<CoursesDTO[]> {
    return this.http.get<CoursesDTO[]>(
      this.apiUrl + `?pageNumber=1&pageSize=10`,
      {
        headers: this.headers,
        withCredentials: true,
      }
    );
  }
}
