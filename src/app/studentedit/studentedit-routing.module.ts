import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StudenteditPage } from './studentedit.page';

const routes: Routes = [
  {
    path: '',
    component: StudenteditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudenteditPageRoutingModule {}
