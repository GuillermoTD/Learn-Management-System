import { Component } from '@angular/core';
import { HeroComponent } from '../../shared/components/hero/hero.component';
import { BasicCoursesGridResumeComponent } from '../../shared/components/basic-courses-grid-resume/basic-courses-grid-resume.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,BasicCoursesGridResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
