import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  signUpForm!: FormGroup;
  visible = false;
  visibleConfirm = false;
  isMatch = false;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.formDetails();

  }

  formDetails() {
    this.signUpForm = this.formBuilder.group({
      fullName: ['Poonam Patil', [Validators.required, this.whiteSpaceRemoveValidator]],
      mob: [989898999, [Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      gender: ['male'],
      pan: [],
      password: [],
      confirmPass: [],
      tc:[true,[Validators.requiredTrue]]
    })
  }

  visiblePassword() {
    this.visible = !this.visible;
  }

  visibleConfirmPassword() {
    this.visibleConfirm = !this.visibleConfirm;
  }

  passMatch() {
    if(this.signUpForm.value.confirmPass !=null ){
      if (this.signUpForm.value.password == this.signUpForm.value.confirmPass ) {
        this.isMatch = false
      } else {
        this.isMatch = true;
      }
    }
   
  }
  submit(){
    console.log('this.signUpForm.value',this.signUpForm.value);
    
  }
//'/\s{1,}/g'
  whiteSpaceRemoveValidator(inputBoxValue:any){
     console.log('inp val',inputBoxValue);
    let spaceInclude = inputBoxValue?.value?.includes('  ')
    return spaceInclude ? {'whiteSpaceError':true} :null
  } 
}
