import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }
  
  private baseUrl="http://localhost:8080/api/v3"

  getMedicines():Observable<Medicine[]>{

    return this.httpClient.get<Medicine[]>(`${this.baseUrl}/get`);

  }

  createMedicine(medicine:Medicine):Observable<Medicine>{
    return this.httpClient.post<Medicine>(`${this.baseUrl}/insert`,medicine);
}

  getMedicineById(id:number):Observable<Medicine>{
    return this.httpClient.get<Medicine>(`${this.baseUrl}/getbyid/${id}`)
  }

  updateMedicine(id:number,medicine:Medicine):Observable<object>{

    return this.httpClient.put<Medicine>(`${this.baseUrl}/update/${id}`,medicine);
  }

  delete(id:number):Observable<object>{
    
    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);
  }

}
