import { Component, Input } from '@angular/core';
import { QuestionBase } from '../../models/model';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @Input() question!: QuestionBase;
  @Input() form!: FormGroup;

  changeValue(formCtrlName: string, answer: string, checked: boolean) {
    let value: string[] = this.form.controls[formCtrlName].value ? this.form.controls[formCtrlName].value : [];
    if (checked) { 
      value.push(answer); 
    } else {
      let found = value.findIndex(v => v == answer);
      if (found > -1) { value.splice(found, 1); }
    }
    this.form.controls[formCtrlName].patchValue(value);
  }
}
