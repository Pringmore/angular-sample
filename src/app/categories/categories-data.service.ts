import { Injectable } from '@angular/core';
import { Categorie } from '../shared/Models/categories.model';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataService {

  categories : Categorie[];

  constructor(private api: ApiService) { }

  // Similar to CREATE /categories
  addCategorie(categorie: Categorie): Observable<Categorie> {
    return this.api.createCategory(categorie);
  }
  
  // Similar to GET /categories
  getAllCategories(): Observable<Categorie[]> {
    return this.api.getCategories();
  }

  // Similar to GET /categories/:id
  getCategoryById(categoryId: number): Observable<Categorie> {
    return this.api.getCategoryById(categoryId);
  }

  // Similar to PUT /categories/:id
  updateCategory(category: Categorie): Observable<Categorie> {
    return this.api.updateCategoryById(category);
  }

  // Similar to DELETE /categories/:id
  deleteCategorie(id: number): Observable<Categorie> {
    return this.api.deleteCategoryById(id);
  }
}
