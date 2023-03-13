import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ResgiterFromPageRoutingModule } from './resgiter-from-routing.module';

import { ResgiterFromPage } from './resgiter-from.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResgiterFromPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ResgiterFromPage]
})
export class ResgiterFromPageModule {}
