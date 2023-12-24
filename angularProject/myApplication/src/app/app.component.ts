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


}
