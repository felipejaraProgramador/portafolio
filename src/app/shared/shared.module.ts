import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav/nav.component';
import { RouterModule } from '@angular/router';
import { PageWorkingComponent } from './page-working/page-working.component';
import { LoadingComponent } from './loading/loading/loading.component';
import { ViewCVComponent } from './view-CV/view-cv/view-cv.component';



@NgModule({
  declarations: [
    NavComponent,
    PageWorkingComponent,
    LoadingComponent,
    ViewCVComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavComponent,
    PageWorkingComponent,
    LoadingComponent,
    ViewCVComponent
  ]
})
export class SharedModule { }
