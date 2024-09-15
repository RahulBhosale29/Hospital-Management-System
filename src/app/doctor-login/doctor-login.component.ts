import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorAutantationService } from '../doctor-autantation.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent {

  username:string='';
  password:string='';

  inValidLogin=false;

  constructor( private router:Router, private doctorautantation:DoctorAutantationService){}

  checkLogIn(){

      if(this.doctorautantation.authenticate(this.username,this.password)){
      
        this.router.navigate(['doctor']);
        this.inValidLogin=false
      }
       else{
        this.inValidLogin=true
        alert("Wrong Cradintials")
        this.router.navigate(['home'])
        
      }

  }

}
