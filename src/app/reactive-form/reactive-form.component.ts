import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient}  from '@angular/common/http'
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {
  constructor(private service:UserDataService){

  }
    
  
name="";
email="abc@gmial.com";
phone="1234567890";
address="Random";
result:any=[];
onSubmit(form:any){

}

// getData(){
//   this.service.getData().subscribe(param=>{
//     console.log(param)
//     this.result = param;
    
//   })
// }



}
