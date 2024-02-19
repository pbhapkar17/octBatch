import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  url ="http://localhost:3000/admin"
  constructor(private httpClient: HttpClient) { }

  postApiCall(formData:any){
   return this.httpClient.post(this.url,formData);
  }
  getUserData() {
   return this.httpClient.get(this.url);
  }

  deleteApiCall(id:any){
    let url = this.url + '/' + id;
   return this.httpClient.delete(url);
  }
}
