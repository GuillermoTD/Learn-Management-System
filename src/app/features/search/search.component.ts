import { Component } from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { SidebarFilterAccordionComponent } from '../../shared/components/sidebar-filter-accordion/sidebar-filter-accordion.component';
import { FilteredCourseItemComponent } from '../../shared/components/filtered-course-item/filtered-course-item.component';
import { CoursesState } from '../../shared/state/CoursesState.service';
import { CoursesDTO } from '../../dto/CoursesDTO';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchCourseService } from './services/SearchCourse.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [
    AccordionModule,
    SidebarFilterAccordionComponent,
    FilteredCourseItemComponent,
    FormsModule,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  // private CourseById: CoursesDTO = {};

  public Courses: CoursesDTO[] = [];
  public CoursesSearched: CoursesDTO[] = [];

  inputText: string = '';

  constructor(private CourseService: SearchCourseService) {}

  GetAllCourses(): void {
    this.CourseService.GetCoursesDefault().subscribe(
      (CoursesSearched: CoursesDTO[]) => {
        this.Courses = CoursesSearched;
        console.log(this.Courses);
      }
    );
  }

  ngOnInit() {
    this.GetAllCourses();
  }
  GetCoursesBySearch(title: string): void {
    this.CourseService.SearchCourses(title).subscribe(
      (CoursesSearched: CoursesDTO[]) => {
        this.Courses = CoursesSearched;
      }
    );
  }
}
