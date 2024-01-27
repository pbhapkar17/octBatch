import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChild2Component } from '../view-child2/view-child2.component';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.css']
})
export class ViewChild1Component {
  name:any;
  @ViewChild(ViewChild2Component) ViewChild2Compo!: ViewChild2Component;
  @ViewChild ('divcontainer') eleRef! : ElementRef


   ngAfterViewInit(){
      this.eleRef.nativeElement.innerHTML = 'Poonam lives Nashik';
   }

  getData(){
   this.name =  this.ViewChild2Compo.cityName;
  }
}
