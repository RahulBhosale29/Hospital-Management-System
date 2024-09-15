import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DoctorAutantationService } from '../doctor-autantation.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private patientService:PatientService,private router:Router, private doctorautantationService:DoctorAutantationService){}

  ngOnInit(): void {
    this.getPatient();
  }

  patients:Patient[]=[];

  getPatient(){
    this.patientService.getPatientList().subscribe(data=>{this.patients=data;
    })
  }

  update(id:number){

    this.router.navigate(['update-patient',id])

  }

  // delete(id:number){

  // this.patientService.delete(id).subscribe(data=>{
  //     console.log(data);
  //     this.getPatient();
  //   })

    delete(id: number) {
      alert(`You Want To Delete The Patient With id: ${id}`);
    
      this.patientService.delete(id).subscribe(data=>{
             console.log(data);
             this.getPatient();
    
    })

  }

  view(id:number){

    this.router.navigate(['view-patient',id]);

  }

  logout(){

    this.doctorautantationService.logout();
    this.router.navigate(['home'])

  }

}
