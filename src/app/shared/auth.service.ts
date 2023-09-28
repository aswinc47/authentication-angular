import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginFormGroup, ILoginFormValues, IRegisterFormValues } from './auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  register(formValues:Partial<IRegisterFormValues>){
    return this.http.post('http://localhost:3000/employees',formValues)
  }

  checkEmail(email:string){
    return this.http.get<IRegisterFormValues[]>('http://localhost:3000/employees')
    .pipe(map(data=>data.some(item => item.email === email)))
  }

  isAuthenticated:boolean=false

  login(formValues:Partial<ILoginFormValues>){
    this.http.get<IRegisterFormValues[]>('http://localhost:3000/employees').pipe(
      map(data => data.find(item => item.email === formValues.email && item.password === formValues.password))
    ).subscribe(value => {
      if(value){
        this.isAuthenticated = true
        this.router.navigateByUrl('/dashboard')
      }
    })
  }

  
}
