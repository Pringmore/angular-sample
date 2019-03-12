import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatListModule,
  MatBadgeModule,
  MatTooltipModule,
  MatIconModule } from '@angular/material';

  import {MatFormFieldModule} from '@angular/material/form-field';
  import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatTooltipModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule
  ]
})
export class MaterialModule { }