import { Component, Input } from '@angular/core';
import { CourseItemComponent } from '../course-item/course-item.component';
import { CoursesDTO } from '../../../dto/CoursesDTO';

@Component({
  selector: 'app-basic-courses-grid-resume',
  imports: [CourseItemComponent],
  templateUrl: './basic-courses-grid-resume.component.html',
  styleUrl: './basic-courses-grid-resume.component.css',
  standalone:true
})
export class BasicCoursesGridResumeComponent {
  @Input() Courses:CoursesDTO[] = [];
}
