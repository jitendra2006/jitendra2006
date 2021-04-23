import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {User} from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private fb:FormBuilder){

  }
  def=true;
  topics = ["angular","react","vue"];
  firstName=" jai ho mai ki";
  userModel = new User("Shailendra","Shailedra@321")

  selectedChoice = this.fb.group({

  })


  registrationForm = this.fb.group({
    
  })

  onclick(form:any){
    console.log(form)
  }
  
}
