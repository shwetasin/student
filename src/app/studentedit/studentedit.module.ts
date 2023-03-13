import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { StudenteditPageRoutingModule } from './studentedit-routing.module';

import { StudenteditPage } from './studentedit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StudenteditPageRoutingModule,  
    ReactiveFormsModule
  ],
  declarations: [StudenteditPage]
})
export class StudenteditPageModule {}
