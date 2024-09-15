import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminAutantationService {

  constructor() { }

  authenticate(username:string,password:string){

    if(username=='rushi'&&password=='rushi123'){
      sessionStorage.setItem('username2',username);
      return true
    }
    else{
       return false
    }

  }

  isUserLoggedIn(){

    console.log("User Is Loggin..")
    let user =sessionStorage.getItem('username2');
    return !(user==null)

  }
  logout(){
    console.log("The User Is Logout..")
    sessionStorage.removeItem('username2');
  }

}
