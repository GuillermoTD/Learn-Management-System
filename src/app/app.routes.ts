import { Routes } from '@angular/router';
import { homeGuard } from './features/home/guards/home.guard';
import { coursesGuard } from './features/courses/guards/courses.guard';
import { loginGuard } from './features/login/guards/login.guard';
import { SearchComponent } from './features/search/search.component';
import { CourseComponent } from './features/courses/course.component';
import { SignupComponent } from './features/signup/signup.component';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { CoursesPageComponent } from './features/courses/pages/courses-page/courses-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, canActivate: [loginGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'courses', component: CoursesPageComponent,canActivate: [coursesGuard] },
  { path: 'course/:id', component: CourseComponent,canActivate: [coursesGuard] },
  { path: 'search', component: SearchComponent,canActivate: [loginGuard]  },
  { path: '', component: HomeComponent, canActivate: [homeGuard] },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];
