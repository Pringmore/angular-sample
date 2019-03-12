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

  newCategory: Categorie = new Categorie();
  newFormHidden: boolean = true;
  titleFormControl = new FormControl('', [
    Validators.required,
    FilledTitleValidator
  ]);

  constructor( private categoriesDataService: CategoriesDataService ) {}

  ngOnInit() {
  }

  // add a new element
  addCategory() {
      //this.newFormHidden = !this.newFormHidden;
      this.categoriesDataService.addCategorie(this.newCategory);
      this.resetNewForm();
  }
  
  // update an element
  onRemoveCategories(categorie: Categorie){
    this.categoriesDataService.deleteCategorie(categorie.id);
  }

  // get all elements  
  get categories() {
    return this.categoriesDataService.getAllCategories();
  }
  
  resetNewForm(){
    this.newCategory = new Categorie();
    this.titleFormControl.reset();
  }

}
