import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JustinPage1PageRoutingModule } from './justin-page1-routing.module';

import { JustinPage1Page } from './justin-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JustinPage1PageRoutingModule
  ],
  declarations: [JustinPage1Page]
})
export class JustinPage1PageModule {}
