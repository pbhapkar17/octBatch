import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //let a = 90;
  title = 'myApplication';
  //propertyName : data type = value;
  a = 20;
  b: number = 90;
  c!: number;
  city: string = "Pune";
  //1. one way db 2. two way db
  //1. one way db
  //1.string interpolation>>{{}} >>syntax {{propertyName}}
  //2.property binding >>[]>> [attribute]="proprtyName"
  //3. event binding>>()>>on event will bind data to the property
  //Two way data bind >> [()]>> [(ngModel)]="propertyName"
  myName = "Poonam";
  isDisable = false;
  fruit!:string;

  constructor() { }

  submit() {
    this.fruit = "Mango";
  }


}
