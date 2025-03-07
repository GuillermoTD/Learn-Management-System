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
import { AuthService } from '../../services/AuthService.service';
import { LoginDTO } from '../../dto/LoginDTO';
import { Observable } from 'rxjs';
import { UserDTO } from '../../dto/UserDTO';
import { UserStateService } from '../../state/UserState.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-box',
  imports: [
    ReactiveFormsModule,
    NzButtonModule,
    NzCheckboxModule,
    NzFormModule,
    NzInputModule,
  ],
  templateUrl: './login-box.component.html',
  styleUrl: './login-box.component.css',
})
export class LoginBoxComponent {
  loginForm!: FormGroup;
  currentUserLogued: UserDTO | null | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userState: UserStateService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      // remember: this.fb.control(true)
    });
  }

  // ngOnInit(): void {
  //   console.log('se ejecuto');
  // }

  submitForm(): void {
    console.log('hola');

    try {
      if (this.loginForm.valid) {
        console.log('Formulario valido', this.loginForm.value);
        this.authService.Login(this.loginForm.value).subscribe({
          next: (user: UserDTO) => {
            console.log('usuario logueado', user);
            this.redirectToHome();
          },
          error: (err) => {
            console.log(err);
          },
        });
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  redirectToHome() {
    this.router.navigate(['/']);
  }
}
