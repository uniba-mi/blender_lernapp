import { Component, ElementRef, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import * as Prism from '../prism.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit {
  title = 'Learn modelling using Blender!';
  hideBackButton: Boolean = false;
  hideNextButton: Boolean = false;

  public routerLinks = ["/welcome", "/required-tools", "/about-elearning", "/blender-ui", "/basic-tools", "/basic-modifiers",
                        "/modelling-chapter-overview", "/model-body", "/model-wheels", "/model-head", 
                        "/model-arms", "/model-plant", "/coloring-and-rendering", "/animation-chapter-overview", "/rigging-and-animation", 
                        "/theory-coordinate-system", "/theory-curves", "/theory-mat-tex", "/theory-modifiers", "/theory-rigging", "/conclusion"];

  public routerLink: string;

  constructor(private router: Router, public location: Location, private elementRef:ElementRef) { 
  }

  ngOnInit() {
    Prism.manual = true;
  }

  onActivate(){
    window.scroll(0,0);
  }

  getHideNextButton(): Boolean {
    this.routerLink = this.router.url;
    if (this.routerLink === this.routerLinks[0] || this.routerLink === this.routerLinks[this.routerLinks.length - 1]) {
      this.hideNextButton = true;
    } else
      this.hideNextButton = false;
    return this.hideNextButton;
  }

  getHideBackButton(): Boolean {
    this.routerLink = this.router.url;
    if (this.routerLink === this.routerLinks[0]) {
      this.hideBackButton = true;
    } else
      this.hideBackButton = false;
    return this.hideBackButton;
  }

  getNext(): string {
    this.routerLink = this.router.url;
    let counter = -1;
    for (let r of this.routerLinks) {
      counter++;
      if (this.routerLink === r) {
        this.routerLink = this.routerLinks[counter + 1];
        break;
      }
    }
    return this.routerLink;
  }
  
  getLast(): string {
    this.routerLink = this.router.url;
    let counter = -1;
    for (let r of this.routerLinks) {
      counter++;
      if (this.routerLink === r) {
        this.routerLink = this.routerLinks[counter - 1];
        break;
      }
    }
    return this.routerLink;
  }

  myFunc(){
    var d1 = this.elementRef.nativeElement.querySelector('#menu');

    if(d1.classList.contains('hidden')){
      d1.classList.remove('hidden');
    } else {
      d1.classList.add('hidden');
    }
  }
}
