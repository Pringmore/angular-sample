import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategorieListComponent } from './categorie-list/categorie-list.component';


const routes: Routes = [
  {
    path: '',
    component: CategorieListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
