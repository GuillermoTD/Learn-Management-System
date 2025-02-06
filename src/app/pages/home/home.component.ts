import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { BasicCoursesGridResumeComponent } from '../../components/basic-courses-grid-resume/basic-courses-grid-resume.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent,BasicCoursesGridResumeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

}
