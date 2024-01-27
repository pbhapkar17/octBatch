import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { Sub1Component } from './sub1/sub1.component';
import { Sub2Component } from './sub2/sub2.component';
import { Sub3Component } from './sub3/sub3.component';
import { ViewChild1Component } from './view-child1/view-child1.component';
import { ViewChild2Component } from './view-child2/view-child2.component';


@NgModule({
  declarations: [
    AdminLandingComponent,
    Sub1Component,
    Sub2Component,
    Sub3Component,
    ViewChild1Component,
    ViewChild2Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
