import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperiencesRoutingModule } from './experiences-routing.module';
import { PageExperienceComponent } from './page-experience/page-experience.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    PageExperienceComponent
  ],
  imports: [
    CommonModule,
    ExperiencesRoutingModule,
    SharedModule
  ],
  exports: [
    PageExperienceComponent
  ]
})
export class ExperiencesModule { }
