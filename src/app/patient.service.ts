import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) {}

  private baseUrl="http://localhost:8080/api/v1"

  getPatientList():Observable<Patient[]>{

    return this.httpClient.get<Patient[]>(`${this.baseUrl}/get`)
  }

  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`)
  }

  createPatient(patient:Patient):Observable<Patient>{

    return this.httpClient.post<Patient>(`${this.baseUrl}/insert`,patient);
  }

getPatientById(id:number):Observable<Patient>{
  return this.httpClient.get<Patient>(`${this.baseUrl}/getbyid/${id}`);
  
}  

updatePatient(id:number,patient:Patient):Observable<object>{

  return this.httpClient.put<Patient>(`${this.baseUrl}/update/${id}`,patient);
}

}
