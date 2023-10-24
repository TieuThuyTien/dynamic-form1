import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAddQuestionModalComponent } from '../../components/form-add-question-modal/form-add-question-modal.component';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
import { FormGroup, FormArray, FormBuilder, AbstractControl } from '@angular/forms';
import { FormService } from '../../services/form.service';
import { QuestionBase } from '../../models/model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent {
  public questionList: QuestionBase[] = [
    // {
    //   answerOptions: [{ key: '0', value: 'op1' }, { key: 'Other', value: 'Other' }],
    //   controlType: "checkbox",
    //   key: "question1",
    //   label: "Câu hoi 1",
    //   value: '',
    //   validators: { required: true },
    //   other: { 
    //     controlType: "text",
    //     key: 'other',
    //     value: ''}  as QuestionBase
    // },
    // {
    //   controlType: "text",
    //   key: "question",
    //   label: "Câu hoi 2",
    //   value: '',
    //   validators: { required: true }
    // },
  ];

  formArray: FormArray = this.fb.array([]);

  constructor(
    public dialog: MatDialog,
    private StoreService: StoreService,
    private router: Router,
    private formService: FormService,
    private fb: FormBuilder
  ) {
    this.StoreService.store.subscribe(res => {
      if (res.length > 0) {
        this.questionList = res;
      }

      this.formService.convertQuestionListToArrayForm(this.formArray, this.questionList);
    })
  }

  toFormGroup(form: AbstractControl) {
    return form as FormGroup;
  }

  addNewModalOpen(): void {
    this.dialog.open(FormAddQuestionModalComponent, {
      data: { number: this.questionList.length }
    }).afterClosed().subscribe(res => {
      if (res) {
        if (res.other) {
          res.other = new QuestionBase({
            controlType: 'text',
            key: 'other',
            validators: { required: true }
          })
        }
        this.questionList.push(res);
        this.formService.convertQuestionToArrayForm(this.formArray, res);
      }
    });
  }

  review() {
    this.formService.passValueArrayFormToQuestionList(this.formArray, this.questionList);
    this.StoreService.store.next(this.questionList);

    this.router.navigate(['/form/answer']);
  }
}
