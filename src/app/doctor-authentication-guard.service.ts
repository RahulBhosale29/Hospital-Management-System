import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DoctorAutantationService } from './doctor-autantation.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorAuthenticationGuardService implements CanActivate{

  constructor(private doctorautantationService:DoctorAutantationService,private router:Router) { }

  canActivate(){

    if(this.doctorautantationService.isUserLoggedIn()){

      return true;

    }else{
      this.router.navigate(['doctor-login'])
      return false;
    }
   
     
    
  }
  }



