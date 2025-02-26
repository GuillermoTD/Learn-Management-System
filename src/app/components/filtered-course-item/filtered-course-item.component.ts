import { Component } from '@angular/core';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filtered-course-item',
  imports: [RatingModule,FormsModule],
  templateUrl: './filtered-course-item.component.html',
  styleUrl: './filtered-course-item.component.css'
})
export class FilteredCourseItemComponent {
  value: number = 3;
}
