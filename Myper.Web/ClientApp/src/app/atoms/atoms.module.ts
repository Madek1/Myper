import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AInputComponent } from './input/input.component';
import { AButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    AInputComponent,
    AButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AInputComponent,
    AButtonComponent
  ]
})
export class AtomsModule { }
