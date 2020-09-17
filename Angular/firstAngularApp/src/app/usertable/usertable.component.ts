import {Component, Input, OnInit} from '@angular/core';
import {user} from '../app-interface';

@Component({
  selector: 'app-usertable',
  templateUrl: './usertable.component.html',
  styleUrls: ['./usertable.component.scss']
})

export class UsertableComponent implements OnInit {
@Input() users:user[]=[]
  constructor() { }

  ngOnInit(): void {
    let foundItem;
    console.log(foundItem);
    let domItems = {
    questUpdateBtn: document.getElementById('question-update-btn'),
    newQuestionText: <HTMLInputElement>document.getElementById('new-question-text')
  } 
  let  updateQuestion=function(){
    foundItem.questionText=domItems.newQuestionText.value;
    console.log(foundItem);
  }
    domItems.questUpdateBtn.onclick= updateQuestion.prototype;
  }

}
