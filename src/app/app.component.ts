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

  public routerLinks = ["/home", "/required-tools", "/about-elearning", "/first-startup", "/blender-ui", "/viewport", "/t-coordinate-system",
                        "/edit-mode", "/first-scene", "/modelling-chapter-overview", "/adding-reference-material", "/blocking-out", 
                        "/shaping-up-one", "/shaping-up-two", "/t-modifiers", "/adding-wheels", "/t-mat-tex", "/adding-materials", 
                        "/adding-black-parts", "/cutting-doors", "/adding-details", "/adding-ladders", "/t-curves", "/using-curves", 
                        "/adding-textures", "/adding-extinguisher", "/adding-windows", "/adding-stairs-front", "/adding-lights", 
                        "/adding-top-light", "/finishing-model", "/rendering", "/animation-chapter-overview", "/creating-robot-part-one", 
                        "/creating-robot-part-two", "/creating-rocket", "/finish-robot", "/importing-objects", "/t-rigging", "/creating-rig", 
                        "/parenting-rig", "/restricting-bones", "/setup-scene", "/animate-robot", "/animate-rocket", "/animate-rotator", "/conclusion"];

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
