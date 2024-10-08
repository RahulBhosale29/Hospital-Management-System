import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit{
 appointments:Appointment[]=[];
  constructor(private appointmentService:AppointmentService){}

  ngOnInit(): void {
    
    this.getAppointments();
  
  }
  
  getAppointments(){
    this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointments=data;
    })
  }

  delete(id:number){
    alert(`You Want To Delete The Patient Appointment: ${id}`);
    this.appointmentService.deleteAppointment(id).subscribe(data=>{console.log(data);
      this.getAppointments();
    })

  }


}
