import { Component } from '@angular/core';
import { LoginBoxComponent } from './components/login-box/login-box.component';

@Component({
  selector: 'app-login',
  imports: [LoginBoxComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
