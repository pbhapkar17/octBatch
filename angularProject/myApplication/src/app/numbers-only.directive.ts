import { Directive, HostListener } from '@angular/core';
console.log('dir calng...');

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor() { }

@HostListener('input',['$event']) acceptNumOnly(val:any){
console.log('dir..', event);

}

}
