import { Component } from '@angular/core';
import { NzRateComponent } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-course',
  imports: [NzRateComponent,FormsModule,NzBadgeModule,AccordionModule],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  tabs = [
    {title:"Video 1",content:"En este video aprenderás lo basico de javascript"},
    {title:"Video 2",content:"En este video aprenderás cosas avanzadas de javascript"},
    {title:"Video 3",content:"En este video aprenderas topicos de expertos de javascript"}
  ];

  requisites = [
    {content:"Solo necesitas una Pc, internet y muchisimas ganas de aprender"}
  ]
}
