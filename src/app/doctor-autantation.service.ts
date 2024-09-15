import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoctorAutantationService {

  constructor() { }

  authenticate(username:string,password:string){

    if(username=="rahul"&&password=="rahul123"){
      sessionStorage.setItem('username',username);
      return true;
    }else{
      return false;
    }
  }

  isUserLoggedIn(){

    console.log("Doctor Is Login..")
    let user=sessionStorage.getItem('username');
    console.log(user)
    return !(user==null);
  }

  logout(){

    console.log("Doctor Is Logouted..")
    sessionStorage.removeItem('username');
  }
}
