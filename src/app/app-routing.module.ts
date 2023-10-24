import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './pages/question-list/question-list.component';
import { AnswerComponent } from './pages/answer/answer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'form/builder',
    pathMatch: 'full',
  }, {
    path: 'form/builder',
    component: QuestionListComponent,
  }, {
    path: 'form/answer',
    component: AnswerComponent,
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
