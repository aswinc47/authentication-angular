import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { IRegisterFormGroup } from 'src/app/shared/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  registerFormGroup = this.fb.group<IRegisterFormGroup>({
    name: this.fb.nonNullable.control(''),
    email: this.fb.nonNullable.control(''),
    password: this.fb.nonNullable.control(''),
  });

  register() {
    this.authService
      .checkEmail(this.registerFormGroup.controls.email.value)
      .subscribe((alreadyExist) => {
        if (!alreadyExist) {
          this.authService
            .register(this.registerFormGroup.value)
            .subscribe((value) => console.log(value));
        } else {
          console.log('Already logged in');
          this.router.navigateByUrl('auth/login');
        }
      });
  }
}
