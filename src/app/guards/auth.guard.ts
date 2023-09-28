import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../shared/auth.service';


export const authGuard:CanActivateFn = (route,state) =>{
  const currentUrl = route.url[0].path
  const authService = inject(AuthService)
  const router = inject(Router)
  if(currentUrl === 'dashboard'){
    if(authService.isAuthenticated){
      return true
    }else{
      alert('Login')
      router.navigateByUrl('/auth/login')
      return false
    }
  }
  return true
}