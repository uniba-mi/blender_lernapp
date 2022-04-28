import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-collapse-component',
  templateUrl: './collapse-component.component.html',
  styles: []
})

/*
  The quiz component takes multiple input parameters to create a question that can be answered and will then be
  evaluated.

  @param question: the question
  @param correctAnswer: the correct answer
  @param answers[]: all possible answers that should be displayed containing the correct one
  @param qId: an ID to be able to find the question and evaluate
*/
export class CollapseComponent implements OnInit {

  @Input()
  message: string;

  @Input()
  qId: string;

  isHidden:boolean = true;

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.buildCollapsable();
  }

  buildCollapsable(){
    var button = this.elementRef.nativeElement.querySelector('.collapsible');
    button.innerHTML = this.message;
  }

  toggle() {
    this.isHidden = !this.isHidden;
  }

}
