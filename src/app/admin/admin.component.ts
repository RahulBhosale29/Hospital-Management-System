import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { AdminAutantationService } from '../admin-autantation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{

  patients:Patient[]=[];
  constructor(private patientService:PatientService, private adminautantationService:AdminAutantationService,private router:Router){}
  
  ngOnInit(): void {
    this.getPatients();
  }

  getPatients(){
    this.patientService.getPatientList().subscribe(data=>{this.patients=data;
      
    })
  }

  delete(id:number){
    alert(`You Want To Delete The Patient With id: ${id}`);
    this.patientService.delete(id).subscribe(data=>{console.log(data);
      this.getPatients();
    })

  }

  logout(){
    this.adminautantationService.logout();
    this.router.navigate(['home'])
  }

}
