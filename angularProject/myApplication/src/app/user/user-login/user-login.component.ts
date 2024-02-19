import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from 'src/app/api-call.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
  name="Poonam";
  isShowPass = false;
  userData:any;
  isValid =false;
  constructor(private dataService : DataService, private router: Router,
    private apiCallService:ApiCallService){}

 ngOnInit(){
  this.getUserData();
 }

 getUserData(){
   this.apiCallService.getUserData().subscribe(response=>{
   this.userData = response;
   console.log( this.userData);
   
   })
 }
  //Template driven : form fileds are less
  //reactive form : form fileds are more, need custom validation

  login(data:any){
  console.log('data',data);
  
  // let userName = data.uName.replace(/\s+/g, ' ');
  // console.log(userName);
  //  let request = {
  //     "UserName" : userName,
  //     "Password" : data.password
  //  }
  if(this.userData ){
  var validUser =  this.userData.find((item:any)=>{
   return  item.fullName == data.uName && data.password == item.password;
    })
  }
  if(validUser ){
   this.dataService.userName = data.uName;//poonam
   this.dataService.id = validUser.id;
   this.router.navigateByUrl('/user/userSucc');
  }else{
    this.isValid =true;
    //this.router.navigateByUrl('/user/userLogin');
  }
  }

  toShowPassword() {
    this.isShowPass = !this.isShowPass;
  }
}
