import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ILoginFormGroup } from 'src/app/shared/auth';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private fb: FormBuilder,private authService:AuthService) {}

  LoginFormGroup = this.fb.group<ILoginFormGroup>({
    email: this.fb.nonNullable.control(''),
    password: this.fb.nonNullable.control(''),
  });

  login(){
    this.authService.login(this.LoginFormGroup.value)
  }
}
