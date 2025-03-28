import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import Cookies from 'js-cookie';
import { CoursesDTO } from '../../../dto/CoursesDTO';

@Injectable({
  providedIn: 'root',
})
export class SearchCourseService {
  private apiUrl = 'http://localhost:5007/courses/search';
  private apiUrl2 = 'http://localhost:5007/courses';

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
    Authorization: `Bearer ${this.getCookieToken()}`,
  });


  GetCoursesDefault(): Observable<CoursesDTO[]> {
    return this.http.get<CoursesDTO[]>(this.apiUrl2, {
      headers: this.headers,
      withCredentials: true,
    });
  }

  constructor(private http: HttpClient) {}

  SearchCourses(title: string): Observable<CoursesDTO[]> {
    console.log('se ejecuto');
    return this.http.get<CoursesDTO[]>(
      this.apiUrl + `/${title}?pageNumber=1&pageSize=10`,
      {
        headers: this.headers,
        withCredentials: true,
      }
    );
  }

  //Obtenemos el token del navegador en caso de que este exista
  getCookieToken(): string {
    return Cookies.get('accessToken') || '';
  }
}
