import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationRoutingModule } from './education-routing.module';
import { PageEducationComponent } from './page-education/page-education.component';


@NgModule({
  declarations: [
    PageEducationComponent
  ],
  imports: [
    CommonModule,
    EducationRoutingModule
  ],
  exports: [
    PageEducationComponent
  ]
})
export class EducationModule { }
