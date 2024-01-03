import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {
 showDiv : boolean = true;
 listItem = ['COffee','Tea','Milk','COffee','Tea','Milk','COffee','Tea','Milk','COffee','Tea','Milk','COffee','Tea','Milk','COffee','Tea','Milk'];
  color='black';
  bgColorName:any = 'purple';
  journey:any ='user';
 // Angular 8 directives can be classified in 3 categories based on how they behave:

// Component Directives
// Structural Directives
// Attribute Directivess
// Component Directives: 
// Component directives are used in main class. They contain the detail 
// of how the component should be processed, instantiated and used at runtime.

// Structural Directives: Structural directives start with a * sign. These
//  directives are used to manipulate and change the structure of the DOM elements.
//   For example,
//  *ngIf directive, *ngSwitch directive, and *ngFor directive.
// *ngIf Directive: The ngIf allows us to Add/Remove DOM Element.
// *ngSwitch Directive: The *ngSwitch allows us to Add/Remove DOM Element. It is similar 
// to switch statement of C#.
// *ngFor Directive: The *ngFor directive is used to repeat a portion of HTML template
//  once per each item from an iterable data .
// Attribute Directives: Attribute directives are used to change the look and behavior
//  of the DOM elements. For example: ngClass directive, and ngStyle directive etc.

// ngClass Directive: The ngClass directive is used to add or remove CSS classes to
//  an HTML element.
// ngStyle Directive: The ngStyle directive facilitates you to modify the style of an
//  HTML element using the expression. You can also use ngStyle directive to dynamically change the style of your HTML element.

toggle(){
//this.showDiv = false;
this.showDiv  = !this.showDiv ;
}
getColor(){
  return this.bgColorName;
}
}
