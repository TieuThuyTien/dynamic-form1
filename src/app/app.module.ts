import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { StoreService } from './services/store.service';
import { QuestionListComponent } from './pages/question-list/question-list.component';
import { AnswerComponent } from './pages/answer/answer.component';
import { FormAddQuestionModalComponent } from './components/form-add-question-modal/form-add-question-modal.component';
import { FormControlComponent } from './components/form-control/form-control.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    AnswerComponent,
    FormAddQuestionModalComponent,
    FormControlComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,

    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
