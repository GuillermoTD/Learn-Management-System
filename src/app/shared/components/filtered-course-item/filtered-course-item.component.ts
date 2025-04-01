import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Rating, RatingModule } from 'primeng/rating';
import { RouterLink } from '@angular/router';
import { CoursesDTO, RatingDTO } from '../../../dto/CoursesDTO';

@Component({
  selector: 'app-filtered-course-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RatingModule,RouterLink],
  templateUrl: './filtered-course-item.component.html',
  styleUrls: ['./filtered-course-item.component.css']
})
export class FilteredCourseItemComponent {
  ratingForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ratingForm = this.fb.group({
      value: [3], // Valor inicial (puede ser null o un número)
    });
  }
 
  @Input() id?:string | undefined;
  @Input() title:string | undefined;
  @Input() description:string | undefined;
  @Input() courseFrontImage:string | undefined;

  ngOnInit(){
  }

  submit() {
    console.log('Valor seleccionado:', this.ratingForm.value);
  }
}
