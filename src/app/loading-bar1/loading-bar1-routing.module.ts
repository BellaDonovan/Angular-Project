import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoadingBar1Page } from './loading-bar1.page';

const routes: Routes = [
  {
    path: '',
    component: LoadingBar1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoadingBar1PageRoutingModule {}
