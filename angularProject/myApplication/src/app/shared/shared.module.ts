import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersOnlyDirective } from '../numbers-only.directive';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
     NumbersOnlyDirective,
    ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
    NumbersOnlyDirective,
    HttpClientModule
  ]
})
export class SharedModule { }
