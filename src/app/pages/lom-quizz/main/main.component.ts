import { formData, inputData, inputTypes } from './form/lom-quizz-form-data';
import { Component, OnInit } from '@angular/core';
import { Message, PrimeNGConfig } from 'primeng/api';
import { LomQuizzForm } from './form/lom-quizz.form';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class LomQuizzMainComponent implements OnInit {
  totalSteps: number = formData.length;
  currentStep: number = 1;
  minimumScoreSuccess: number = 7;

  isCalculated: boolean = false;
  isProcessingData: boolean = false;

  score: number = 0;
  scoreMessages: Message[] = [];

  formData: inputData[] = formData;
  inputTypes = inputTypes;
  quizzForm: LomQuizzForm = new LomQuizzForm();

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.scoreMessages = [
      {severity:'success', summary:'Success', detail:'Message Content', closable: false},
      {severity:'error', summary:'Error', detail:'Message Content', closable: true}
    ];
    this.primengConfig.ripple = true;
  }

  nextStep() {
    if (this.currentStep >= this.totalSteps) {
      return;
    }

    this.currentStep++
  }

  backStep() {
    if (this.currentStep <= 1) {
      return;
    }
    
    this.currentStep--
  }

  restart() {
    this.quizzForm.reset();
    this.scoreMessages = [];
    this.score = 0;
    this.currentStep = 1;
    this.isCalculated = false;
  }

  calculateScore() {
    this.isProcessingData = true;
    const scoreMessages: Message[] = [];
    const formValues = this.quizzForm.formGroup.getRawValue();

    setTimeout(()=> {
      this.formData.map((element: inputData, i: number)  => {
        if (element.type === inputTypes.checkbox) { formValues[element.id] = formValues[element.id].join() }
        if (element.correctValue === formValues[element.id].toLowerCase()) {
           scoreMessages.push({severity:'success', summary:`Question ${element.id + 1} - Success!`, closable: false});
           this.score++
        } else {
          scoreMessages.push({severity:'error', summary:`Question ${element.id + 1} - Error!`, detail:`Correct Answer: ${element.correctValue}`, closable: false});
        }
      });
      this.scoreMessages = scoreMessages;
      this.isCalculated = true;
      this.isProcessingData = false;
    }, 2000);
  }

}
