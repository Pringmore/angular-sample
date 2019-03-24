import { Component, OnInit } from '@angular/core';
import { CategoriesDataService } from '../categories-data.service';
import { Categorie } from '../../shared/Models/categories.model';
import { FormControl, Validators } from '@angular/forms';
import { FilledTitleValidator } from '../../shared/validators/categoryTitle.validator';

@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss'],
  providers: [CategoriesDataService]
})
export class CategorieListComponent implements OnInit {

  categories: Categorie[] = [];
  newCategory: Categorie = new Categorie();
  newFormHidden: boolean = true;
  titleFormControl = new FormControl('', [
    Validators.required,
    FilledTitleValidator
  ]);

  constructor( private categoriesDataService: CategoriesDataService ) {}

  ngOnInit() {
    this.categoriesDataService.getAllCategories()
      .subscribe(
        (categories) => {
            this.categories = categories;
        }
      );
  }

  // add a new element
  addCategory() {
    //this.newFormHidden = !this.newFormHidden;
    this.categoriesDataService.addCategorie(this.newCategory)
      .subscribe(
        (newCategory) => {
            this.categories = this.categories.concat(newCategory);
        }
      );
    this.resetNewForm();
  }
  
  // remove an element
  onRemoveCategorie(categorie: Categorie){
    this.categoriesDataService.deleteCategorie(categorie.id)
      .subscribe(
        (_) => {
            this.categories = this.categories.filter(element => element.id !== categorie.id);
        }
      );
  }

  resetNewForm(){
    this.newCategory = new Categorie();
    this.titleFormControl.reset();
  }
}
