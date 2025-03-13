import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { LoginDTO } from '../../../../dto/LoginDTO';
import { UserDTO } from '../../../../dto/UserDTO';
import { UserStateService } from '../../../../state/UserState.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../../services/AuthService.service';

@Component({
  selector: 'app-login-box',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
  ],
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.css'],
})
export class LoginBoxComponent {
  loginForm!: FormGroup;
  currentUserLogued: UserDTO | null | undefined;

  constructor(
    private fb: FormBuilder,
    private userState: UserStateService,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submitForm(): void {
    console.log('hola');

    if (this.loginForm.valid) {
      console.log('Formulario válido', this.loginForm.value);
      this.authService.Login(this.loginForm.value).subscribe({
        next: (user: UserDTO) => {
          console.log('Usuario logueado', user);
          this.redirectToHome();
        },
        error: (err) => {
          console.log('Error al iniciar sesión', err);
        },
      });
    } else {
      console.log('Formulario no válido');
    }
  }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }
}
