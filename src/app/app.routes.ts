import { Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomeComponent } from './pages/home/home.component';

 export const routes: Routes = [
    { path: 'courses', component: CoursesPageComponent },
    { path: '', component: HomeComponent },
  ];
