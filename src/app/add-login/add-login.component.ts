import { Component } from '@angular/core';
import { AdminAutantationService } from '../admin-autantation.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-add-login',
  templateUrl: './add-login.component.html',
  styleUrls: ['./add-login.component.css']
})
export class AddLoginComponent {

   username:string='';
   password:string='';

   inValidLogin=false;

   constructor(private adminautantationService:AdminAutantationService,private router:Router){}

   checkLogIn(){

    if(this.adminautantationService.authenticate(this.username,this.password)){

      this.router.navigate(['admin'])
      this.inValidLogin=false;
    }
    else{

      this.inValidLogin=true;
      alert("Wrong Cradintials");
      this.router.navigate(['home'])

    }

   }

}
