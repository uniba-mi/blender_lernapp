import { Component, ElementRef, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quiz-component',
  templateUrl: './quiz-component.component.html',
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
export class QuizComponentComponent implements OnInit {

  @Input()
  question: string;

  @Input()
  correctAnswer: string;

  @Input()
  answers: string[];

  @Input()
  qId: string;

  constructor(private elementRef:ElementRef) { }

  ngOnInit() {
    this.buildQuiz();
  }

  buildQuiz(){
    let finalHtml = '';
    finalHtml = finalHtml + '<p class="question">' + this.question + '</p>';
    finalHtml = finalHtml + '<div class="answers">';
    for(let answer of this.answers){
      let htmlAnswer = '<label>' + 
        '<input type="radio" name="' + this.qId + '"' + 'value="' + answer + 
        '">' + 
        '<p>' + answer + '</p>' +
        '</input>' +
        '</label>';

      finalHtml = finalHtml + htmlAnswer;
    }
    finalHtml = finalHtml + '</div>';

    var d1 = this.elementRef.nativeElement.querySelector('.quiz');

    d1.innerHTML = finalHtml;
  }

  checkAnswers() {
    console.log('checking answers');

    //validate it
    let qSelector = 'input[name="' + this.qId + '"]:checked';
    var checkedAnswer = this.elementRef.nativeElement.querySelector(qSelector);
    let value = checkedAnswer.getAttribute('value');
    console.log(checkedAnswer);
    console.log(value);

    let result = '';
    if(value==this.correctAnswer){
      result = 'You answered correctly! Please continue to the next section.';
    } else {
      result = 'Answer was incorrect. It is recommend you redo this section.';
    }

    var d1 = this.elementRef.nativeElement.querySelector('.result');
    let resultsHtml = '';
    resultsHtml = resultsHtml + '<p class="result">' + result + '</p>';

    d1.innerHTML = resultsHtml;
  }

}
