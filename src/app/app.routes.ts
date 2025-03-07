import { Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { homeGuard } from './guards/home.guard';
import { CourseComponent } from './pages/course/course.component';
import { SearchComponent } from './pages/search/search.component';
import { loginGuard } from './guards/login.guard';
import { coursesGuard } from './guards/courses.guard';

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
