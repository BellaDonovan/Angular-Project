import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustinPage1Page } from './justin-page1.page';

const routes: Routes = [
  {
    path: '',
    component: JustinPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustinPage1PageRoutingModule {}
