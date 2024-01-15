import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  
  signUpForm! : FormGroup;

  constructor( private formBuilder: FormBuilder){}

  ngOnInit(){

    this.formDetails();

  }

  formDetails(){
    this.signUpForm = this.formBuilder.group({
      fullName:['',[Validators.required]],
      mob:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
      gender:[],
      pan:[],
      password:[],
      confirmPass:[]
    })
  }



}
