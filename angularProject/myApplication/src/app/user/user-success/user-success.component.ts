import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.css']
})
export class UserSuccessComponent {
 name:any;
 id:any;
  constructor(private dataService : DataService, private router: Router, private apiCallService:ApiCallService){}

  ngOnInit(){
    this.name = this.dataService.userName;
    this.id = this.dataService.id
  }
  accountDelete(){
    this.apiCallService.deleteApiCall(this.id).subscribe(res=>{
      
    })
  }
}
