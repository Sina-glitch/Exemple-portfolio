import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CvComponent implements OnInit {

  constructor() {
    console.log("ok")
  }

  ngOnInit(): void {
  }

}
