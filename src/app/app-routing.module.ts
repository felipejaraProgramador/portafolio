import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutComponent } from './modules/about/page-about/page-about.component';
import { PageHomeComponent } from './modules/home/page-home/page-home.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: PageHomeComponent
  // },
  // {
  //   path: 'about',
  //   component: PageAboutComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: 'home'
  // }

  {
    path: 'about',
    component: PageAboutComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
