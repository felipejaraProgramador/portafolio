import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-about',
  templateUrl: './page-about.component.html',
  styleUrls: ['./page-about.component.scss']
})
export class PageAboutComponent implements OnInit {

  age: number = 404;

  dayBirth: number = 13;
  monthBirth: number = 5;
  yearBirth: number = 1996;

  date = new Date();

  constructor() {
    this.age = this.getAge();
  }

  async ngOnInit() {
  }

  getAge(): number{
    let auxAge = this.date.getFullYear() - this.yearBirth;

    if((this.date.getMonth()+1) < this.monthBirth){      
      return auxAge -= 1;
    }else if((this.date.getMonth()+1) == this.monthBirth && this.date.getDate() < this.dayBirth){
      return auxAge -= 1;
    }else{
      return auxAge;
    }    

  }


}
