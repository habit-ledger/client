import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';

const Modules = [
  MatCardModule,
  MatSliderModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ... Modules,
  ],
  exports: Modules,
})
export class SharedModule { }
