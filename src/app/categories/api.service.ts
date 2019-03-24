import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Categorie } from '../shared/Models/categories.model';
import { pipe, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators';
import { errorHandler } from '@angular/platform-browser/src/browser';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  public createCategory(categorie : Categorie): Observable<Categorie> {
    // User to add a new category
    // API : POST /categories
    // via   this.http.post()
    return this.http.post(apiUrl + '/categories', categorie).pipe(
      map(response => {
          return new Categorie(JSON.parse(JSON.stringify(response)))
      }),
      catchError(this.handleError)
    );
  }

  public getCategories(): Observable<Categorie[]> {
    // Used to list the categories
    // API : GET /categories  
    // via   this.http.get()
    return this.http.get(apiUrl + '/categories')
      .pipe(
        map( response => {
          const categories = JSON.parse(JSON.stringify(response));
          return categories.map(categorie => new Categorie(categorie));
        }
      ),
      catchError(this.handleError)
      ); 
  }

  public getCategoryById(categoryId : Number): Observable<Categorie> {
    // Used to list the categories
    // API : GET /categories/:id  
    // via   this.http.get()
    return this.http.get(apiUrl + '/categories/' + categoryId)
    .pipe(
      map(response => { 
        return new Categorie(JSON.parse(JSON.stringify(response)))
      }),
      catchError(this.handleError)
    );
  } 

  public updateCategoryById(categorie : Categorie): Observable<Categorie> {
    // used to set the new changes to an existing category
    // API : SET /categories/:id
    // via   this.http.put
    return this.http.put(apiUrl + '/categories/'+ categorie.id, categorie)
    .pipe(
      map(response => {
        return new Categorie(JSON.parse(JSON.stringify(response)))
      }),
      catchError(this.handleError)
    );
  }

  public deleteCategoryById(categoryId : Number): Observable<null> {
    // used to delete an existing category
    // API : DELETE /category/:id
    // via   this.http.delete()
    return this.http.delete(apiUrl + '/categories'+ categoryId)
    .pipe(
      map(
        response => null
      ),
      catchError(this.handleError)
    );
  }

  private handleError (error: Response | any) {
    console.error('CategoriesApiService::handleError!!', error);
    return Observable.throw(error);
  }
}
