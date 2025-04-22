import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import Cookies from 'js-cookie';
import { CoursesDTO } from '../../../dto/CoursesDTO';

@Injectable({
  providedIn: 'root',
})
export class CourseItemService {
  private apiUrl = 'http://localhost:5007/course/';

  constructor(private http: HttpClient) {}

  id!: string;

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Access-Control-Allow-Origin': 'http://localhost:4200',
  });

  handleFetchCourse(id:string): Observable<CoursesDTO> {
    
    console.log(this.id);

    console.log(this.apiUrl + `${id}?pageNumber=1&pageSize=10`);

    return this.http.get<CoursesDTO>(
      this.apiUrl + `${id}?pageNumber=1&pageSize=10`,
      {
        headers: this.headers,
        withCredentials: true,
      }
    );
  }
}
