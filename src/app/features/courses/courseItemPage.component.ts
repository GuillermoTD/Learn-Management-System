import { Component } from '@angular/core';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { AccordionModule } from 'primeng/accordion';
import { CourseItemService } from './services/courseItemService.service';
import { CoursesDTO } from '../../dto/CoursesDTO';
import { Router, ActivatedRoute,RouterModule } from '@angular/router';


@Component({
  selector: 'app-course',
  imports: [NzRateComponent,FormsModule,NzBadgeModule,AccordionModule,RouterModule],
  templateUrl: './courseItemPage.component.html',
  styleUrl: './courseItemPage.component.css',
  standalone:true
})
export class CourseItemPageComponent {

  constructor(private CourseService:CourseItemService,private router:ActivatedRoute){}

  public CourseData: CoursesDTO | undefined;
  public courseId: string | null = null!; 

  ngOnInit(){
    this.GetCourseById()
  }

  tabs = [
    {title:"Video 1",content:"En este video aprenderás lo basico de javascript"},
    {title:"Video 2",content:"En este video aprenderás cosas avanzadas de javascript"},
    {title:"Video 3",content:"En este video aprenderas topicos de expertos de javascript"}
  ];

  requisites = [
    {content:"Solo necesitas una Pc, internet y muchisimas ganas de aprender"}
  ]


  GetCourseById() {
    const id = this.router.snapshot.paramMap.get('id');
    console.log('ID from route:', id);
  
    if (!id) {
      console.error('ID no encontrado en la ruta');
      return;
    }
  
    this.courseId = id;
  
    this.CourseService.handleFetchCourse( this.courseId).subscribe(
      (Course: CoursesDTO) => {
        this.CourseData = Course;
        console.log(this.CourseData);
      }
    );
  }
}
