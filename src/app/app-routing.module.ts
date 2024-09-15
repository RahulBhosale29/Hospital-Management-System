import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DoctorComponent } from './doctor/doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { AddLoginComponent } from './add-login/add-login.component';
import { AdminAuthenticationGuardService } from './admin-authentication-guard.service';
import { DoctorAuthenticationGuardService } from './doctor-authentication-guard.service';


 const routes: Routes = [
   {path:'admin',component:AdminComponent,canActivate:[AdminAuthenticationGuardService]},

   {path:'appointmentlist',component:AppointmentComponent,canActivate:[AdminAuthenticationGuardService]},
   
   {
    path:'create-appointment',component:CreateAppointmentComponent,canActivate:[AdminAuthenticationGuardService]
   },
   {
    path:'home',component:HomeComponent
  },
  {path:'',redirectTo:'home',pathMatch:'full'},
  {
    path:'doctor',component:DoctorComponent,canActivate:[DoctorAuthenticationGuardService]
  },
  {
    path:'create-patient',component:CreatePatientComponent,canActivate:[DoctorAuthenticationGuardService]
  },
  {
    path:'view-medicine',component:MedicinelistComponent,canActivate:[DoctorAuthenticationGuardService]
  },
  {
    path:'create-medicine',component:CreateMedicineComponent,canActivate:[DoctorAuthenticationGuardService]
  },
  {
    path:'update-patient/:id',component:UpdatePatientComponent,canActivate:[DoctorAuthenticationGuardService] 
  },
  {
    path:'view-patient/:id',component:ViewPatientComponent,canActivate:[DoctorAuthenticationGuardService]
  },
  {
    path:'update-medicine/:id',component:UpdateMedicineComponent,canActivate:[DoctorAuthenticationGuardService]
  },
  {
    path:'doctor-login',component:DoctorLoginComponent
  },
  {
    path:'add-login',component:AddLoginComponent
  },
  {
    path:'**',component:NotfoundComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
} )
export class AppRoutingModule { }
