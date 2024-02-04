import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private eleRef: ElementRef) { }

  @HostListener('input', ['$event']) acceptNumOnly(event: any) {

    this.eleRef.nativeElement.value = event.target.value.replace(/[^0-9]*/g, '');


  }

}
