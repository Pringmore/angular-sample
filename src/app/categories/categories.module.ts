import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategorieListComponent } from './categorie-list/categorie-list.component';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategorieItemComponent } from './categorie-item/categorie-item.component';

@NgModule({
  declarations: [CategorieListComponent, CategorieItemComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CategoriesModule {}
