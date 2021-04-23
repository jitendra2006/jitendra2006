import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

 url = "http://localhost:3000"
  constructor(private http:HttpClient) { }

// Post the Data

setData(data:any){
  console.log(data)
  return this.http.post("http://localhost:3000/students",data)
}


}
