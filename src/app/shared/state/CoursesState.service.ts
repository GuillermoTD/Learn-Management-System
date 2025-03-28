import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CoursesDTO } from '../../dto/CoursesDTO';

@Injectable({
  providedIn: 'root',
})

export class CoursesState {
  //Esta es una instancia del estado que se usara para los cursos, la misma inicia en null
  private coursesObject = new BehaviorSubject<CoursesDTO | null>(null);

  public courses$ = this.coursesObject.asObservable();

  constructor() {}

  getCourses(){
    return this.coursesObject.value;
  }

}
