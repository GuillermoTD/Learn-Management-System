import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { NzRateComponent } from 'ng-zorro-antd/rate';

@Component({
  selector: 'app-course-item',
  imports: [FormsModule, NzRateComponent],
  templateUrl: './course-item.component.html',
  styleUrl: './course-item.component.css',
})
export class CourseItemComponent {
  @Input() id: string | undefined = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() courseFrontImage: string = '';

  constructor(private router: Router) {}

  GoToCourse(): void {
    // this.router.navigate(['/course'], { queryParams: { id: this.id } });
    console.log(this.id)
  }
}
