import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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
  validateForm;
  currentUserLogued: UserDTO | null | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userState: UserStateService,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      username: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required]),
      // remember: this.fb.control(true)
    });
  }

  ngOnInit(): void {
    console.log('se ejecuto');
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);

      const loginRequest: LoginDTO = {
        username: this.validateForm.value.username!,
        password: this.validateForm.value.password!,
      };

      this.authService.Login(loginRequest).subscribe({
        next: (user: UserDTO) => {
          this.authService.handleLoginSuccess(user);
          console.log('Dato capturado', user);

          this.userState.user$.subscribe((currentUser) => {
            this.currentUserLogued = currentUser;
            console.log(
              'Este es el estado del usuario logueado',
              this.currentUserLogued
            );
          });
          this.redirectToHome() 
        },
        error: (error) => {
          console.error('error de login', error);
        },
      });

      console.log(
        'Este es el nuevo estado con el usuario guardado',
        this.userState.getUser()
      );

      // this.currentUser = this.userState.user$.subscribe({
      //   next:(response)=>{
      //     return response
      //   }
      // })
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  redirectToHome() {
    this.router.navigate(['/courses']);
  }
}
