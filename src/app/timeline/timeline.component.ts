import { Component, Input, OnInit } from '@angular/core';
import { ITimeline } from '../models/Interfaces';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() data?: ITimeline[];

  constructor() { }

  ngOnInit(): void {
  }

}
