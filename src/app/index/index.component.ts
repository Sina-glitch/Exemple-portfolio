import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ITimeline } from '../models/Interfaces';
import { ScriptService } from '../script.service';
import { TimelineStore } from '../timeline/timeline.store';

declare var $: any;

@Component({
  selector: 'app-index',
  animations: [
    trigger('load', [
      state('closed', style({
        opacity: 0,
      })),
      state('open', style({
        opacity: 1,
      })),
      transition('* => open', [
        animate('0.3s')
      ]),
    ])
  ],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  isLoaded = false;

  constructor(private titleService:Title) {
    this.titleService.setTitle("Angelo Tremoureux")
  }

  ngOnInit(): void {
    const that = this;
    setTimeout(
      function() {
        that.isLoaded = true;
      }, 100);
  }

  getParcoursScolaire(): ITimeline[] {
    return TimelineStore;
  }
}
