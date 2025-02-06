import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzRateComponent } from 'ng-zorro-antd/rate';

@Component({
  selector: 'app-course-item',
  imports: [FormsModule,NzRateComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {

}
