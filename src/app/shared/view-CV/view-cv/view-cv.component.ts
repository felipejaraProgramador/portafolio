import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.scss']
})
export class ViewCVComponent implements OnInit {

  @Output() showCV = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  sendStatusShowCV(){
    this.showCV.emit(false);
  }

}
