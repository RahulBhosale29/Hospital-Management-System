import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAutantationService } from './admin-autantation.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthenticationGuardService implements CanActivate{

  constructor(private adminautantationService:AdminAutantationService,private router:Router) { }

  canActivate(){

    if(this.adminautantationService.isUserLoggedIn()){
      return true;
    }
    else{
      this.router.navigate(['add-login'])
      return false;
    }

  }
  }

