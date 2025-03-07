import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NzRateComponent } from 'ng-zorro-antd/rate';


@Component({
  selector: 'app-course-item',
  imports: [FormsModule,NzRateComponent,RouterLink],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {

}
