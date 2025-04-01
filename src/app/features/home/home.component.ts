import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { BasicCoursesGridResumeComponent } from '../../shared/components/basic-courses-grid-resume/basic-courses-grid-resume.component';
import { SearchCourseService } from '../search/services/SearchCourse.service';
import { CoursesDTO } from '../../dto/CoursesDTO';
import { HomeSearcCourse } from './services/HomeSearchService.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, BasicCoursesGridResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  public CoursesSearched: CoursesDTO[] = [];
  constructor(
    private SearchCourseService: SearchCourseService,
    private HomeSearchService: HomeSearcCourse
  ) {}

  ngAfterContentInit() {
    this.GetAllCourses();
  }

  GetAllCourses() {
    this.HomeSearchService.FetchCourses().subscribe(
      (Courses: CoursesDTO[]) => {
        this.CoursesSearched = Courses;
      }
    );
  }
}
