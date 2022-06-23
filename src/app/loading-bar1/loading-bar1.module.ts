import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadingBar1PageRoutingModule } from './loading-bar1-routing.module';

import { LoadingBar1Page } from './loading-bar1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadingBar1PageRoutingModule
  ],
  declarations: [LoadingBar1Page]
})
export class LoadingBar1PageModule {}
