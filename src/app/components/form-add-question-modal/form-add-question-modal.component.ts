import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-add-question-modal',
  templateUrl: './form-add-question-modal.component.html',
  styleUrls: ['./form-add-question-modal.component.scss']
})
export class FormAddQuestionModalComponent {
  qType = [
    { text: 'Checkbox List', value: 'checkbox' },
    { text: 'Paragraph answer', value: 'text' }
  ];

  form = this.fb.group({
    controlType: ['', Validators.required],
    key: ['question' + this.data.number],
    label: ['', Validators.required],
    other: [false],
    answerOptions: this.fb.array([]),
    validators: this.fb.group({
      required: [false]
    }),
  })

  constructor(
    public dialogRef: MatDialogRef<FormAddQuestionModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) { }

  get answerOptions() {
    return this.form.controls["answerOptions"] as FormArray;
  }

  toFormGroup(form: AbstractControl) {
    return form as FormGroup;
  }

  changeType() {
    if (this.form.controls['controlType'].value == 'checkbox' && this.form.controls["answerOptions"].length == 0) {
      this.addAnswerOption();
    }
    if (this.form.controls['controlType'].value == 'text') {
      this.form.controls["answerOptions"].clear();
    }
  }

  addAnswerOption() {
    const length = this.answerOptions.length;
    if (length > 5) return;

    const f = this.fb.group(
      {
        key: ['' + length],
        value: ['', Validators.required]
      }
    );
    this.answerOptions.push(f);
  }

  changeCheckbox(field: string, checked: any) {
    switch (field) {
      case 'other':
        this.form.controls['other'].setValue(checked);
        break;
      case 'required':
        this.form.controls.validators.controls.required.patchValue(checked);
    }
  }

  submit() {
    let data = this.form.getRawValue();
    if (data.other) {
      data.answerOptions.push({ key: 'Other', value: 'Other' })
    }

    this.dialogRef.close(data);
  }
}
