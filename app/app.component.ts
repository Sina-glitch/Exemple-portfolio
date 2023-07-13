import { Component, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { NavbarData } from './models/Interfaces';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [

  ]
})
export class AppComponent {


  constructor() {}

  ngOnInit(): void {
    $(window).scroll(function () {
      var btn = $("#buttonToTop");
      if ($(window).scrollTop() > 300) {
        btn.addClass("show");
      } else {
        btn.removeClass("show");
      }
    });

    $(document).ready(function () {
      $("#buttonToTop").on("click", function (e: any) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "300");
      });
    });
  }

  getNavbarItems() {
    const items: NavbarData[] = [];
    items.push({
      id: 1,
      title: 'Accueil',
      href: '',
      icon: 'computer',
      disable: false
    });
    items.push({
      id: 2,
      title: 'Mon CV',
      href: 'cv',
      icon: 'palette',
      disable: false
    });
    items.push({
      id: 3,
      title: 'Projets',
      href: 'projets',
      icon: 'compass-drafting',
      disable: false
    });
    return items;
  }

}
