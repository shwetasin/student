import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgiterFromPage } from './resgiter-from.page';

const routes: Routes = [
  {
    path: '',
    component: ResgiterFromPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgiterFromPageRoutingModule {}
