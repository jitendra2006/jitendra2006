import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

 url = "http://localhost:3000"
  constructor(private http:HttpClient) { }

// Getting the User data from server
// Get request endpoint
getData(){
  return this.http.get("http://localhost:3000/students");
}

// Get indivisual data of student
detStudentDetails(roll:any){
  return this.http.get(`http://localhost:3000/${roll}`)

}

// Post the Data

setData(data:any){
  console.log(data)
  return this.http.post("http://localhost:3000/students",data)
}


}
