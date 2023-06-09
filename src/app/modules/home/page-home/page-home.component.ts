import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  @Output() showCV = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sendStatusShowCV(){
    this.showCV.emit(true);
  }

}
