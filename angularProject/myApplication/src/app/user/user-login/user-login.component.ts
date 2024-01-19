import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
 
  constructor(private dataService : DataService, private router: Router){}

name="Poonam";
isShowPass = false;
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
   this.dataService.userName = data.uName;//poonam
   this.router.navigateByUrl('/user/userSucc');
  }

  toShowPassword() {
    this.isShowPass = !this.isShowPass;
  }
}
