import { Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { homeGuard } from './guards/home.guard';
import { CourseComponent } from './pages/course/course.component';


 export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'courses', component: CoursesPageComponent },
    { path: 'course/:id', component: CourseComponent },
    { path: '', component:HomeComponent, canActivate:[homeGuard]},
    { path: 'home', redirectTo:'/', pathMatch:"full" },
    { path: '**', redirectTo:'/' },
  ];

  48