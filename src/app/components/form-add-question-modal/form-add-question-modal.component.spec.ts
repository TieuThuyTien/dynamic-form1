import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddQuestionModalComponent } from './form-add-question-modal.component';

describe('FormAddQuestionModalComponent', () => {
  let component: FormAddQuestionModalComponent;
  let fixture: ComponentFixture<FormAddQuestionModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormAddQuestionModalComponent]
    });
    fixture = TestBed.createComponent(FormAddQuestionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
