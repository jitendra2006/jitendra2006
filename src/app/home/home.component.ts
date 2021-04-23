import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username="";
  mail="";
  mob="";
  street="";
  street2="";
  city="";
  zip="";
  choice="";
  html="";
  css="";
  timeslot=""
  

  constructor(private service:UserDataService) { }

  ngOnInit(): void {
  }

  onSubmit(form:any){
    console.log(form.value)
    this.service.setData(form.value).subscribe(
      data=>{
        console.log(data)
      },
      err=>{
        console.log(err)
      }
    )


  }

}
