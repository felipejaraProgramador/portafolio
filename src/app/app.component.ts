import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portafolio';

  showCV: boolean = false;


  statusShowCV(status: boolean){
    this.showCV = status;
  }

}
