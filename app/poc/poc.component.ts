import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poc',
  templateUrl: './poc.component.html',
  styles: []
})
export class PocComponent implements OnInit {
  public theorySmall: Boolean;
  public theoryLarge: Boolean;
  public praxis: Boolean;

  constructor() { }

  ngOnInit() {
  }
}
