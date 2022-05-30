import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const url='https://628b35d2667aea3a3e29b84f.mockapi.io/api/v1/product'
@Injectable({
  providedIn: 'root'
})
export class UsersserviceService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get<any>(url);
  }
  postProduct(data:any){
    return this.http.post<any>(url,data)
  }
  putProduct(data:any,id:number){
    return this.http.put<any>(url+"/"+id,data)
  }
  deleteProduct(id:number){
    return this.http.delete<any>(url+"/"+id) 
  }
}
