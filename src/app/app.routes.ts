import { Routes } from '@angular/router';
import { CoursesPageComponent } from './pages/courses-page/courses-page.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';

 export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent},
    { path: 'courses', component: CoursesPageComponent },
    { path: 'course/:id', component: CoursesPageComponent },
    { path: '', component:HomeComponent},
    { path: 'home', redirectTo:'/', pathMatch:"full" },
    { path: '**', redirectTo:'/' },
  ];

  48