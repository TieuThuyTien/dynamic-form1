import { Injectable } from '@angular/core';
import { IFormValidators, QuestionBase } from '../models/model';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  // convertQuestionListToForm(questions: QuestionBase[]) {
  //   let formGroup: any = {};
  //   questions.forEach(q => {
  //     const listValidation = q.validators ? this.convertValidation(q.validators) : [];
  //     formGroup[q.key] = new FormControl(q.value, listValidation);
  //   });
  //   return new FormGroup(formGroup);
  // }
  
  // convertQuestionToForm(form: FormGroup, question: QuestionBase) {
  //   const listValidation = question.validators ? this.convertValidation(question.validators) : [];
  //   form.addControl(question.key, new FormControl(question.value, listValidation));
  // }

  // passValueFormToQuestionList(form: FormGroup, questions: QuestionBase[]) {
  //   questions.forEach(q => {
  //     q.value = form.get(q.key)?.value;
  //   })
  // }

  convertValidation(validation: IFormValidators): any[] {
    const list = [];
    if (validation.min) {
      list.push(Validators.min(validation.min));
    }
    if (validation.max) {
      list.push(Validators.max(validation.max));
    }
    if (validation.required) {
      list.push(Validators.required);
    }
    if (validation.email) {
      list.push(Validators.email);
    }
    if (validation.minLength) {
      list.push(Validators.minLength(validation.minLength));
    }
    if (validation.maxLength) {
      list.push(Validators.maxLength(validation.maxLength));
    }
    if (validation.pattern) {
      list.push(Validators.pattern(validation.pattern));
    }
    if (validation.nullValidator) {
      list.push(Validators.nullValidator);
    }

    return list;
  }

  // list => array form
  convertQuestionListToArrayForm(formArray: FormArray, questions: QuestionBase[]) {
    questions.forEach(q => {
      let formGroup: any = {};
      const listValidation = q.validators ? this.convertValidation(q.validators) : [];
      formGroup[q.key] = new FormControl(q.value, listValidation);
      if (q.other) formGroup['other'] = new FormControl(q.other.value, [Validators.required]);

      formArray.push(new FormGroup(formGroup));
    });
    return formArray;
  }
  
  // 1 question => array form
  convertQuestionToArrayForm(formArray: FormArray, question: QuestionBase) {
    const listValidation = question.validators ? this.convertValidation(question.validators) : [];
    
    let formGroup: any = { [question.key]: new FormControl(question.value, listValidation) };
    formGroup[question.key] = new FormControl(question.value, listValidation);
    if (question.other) formGroup['other'] = new FormControl(question.other.value, [Validators.required]);
    formArray.push(new FormGroup(formGroup));
  }

  passValueArrayFormToQuestionList(formArray: FormArray, questions: QuestionBase[]) {
    questions.forEach((q, i) => {
      q.value = formArray.controls[i].get(q.key)?.value;
      if (q.other) q.other.value = formArray.controls[i].get('other')?.value;
    })
  }
}
