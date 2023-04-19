import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav/nav.component';
import { RouterModule } from '@angular/router';
import { PageWorkingComponent } from './page-working/page-working.component';



@NgModule({
  declarations: [
    NavComponent,
    PageWorkingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    PageWorkingComponent
  ]
})
export class SharedModule { }
