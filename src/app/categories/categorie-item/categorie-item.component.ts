import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoriesDataService } from '../categories-data.service';
import { Categorie } from '../../shared/Models/categories.model';

@Component({
  selector: 'app-categorie-item',
  templateUrl: './categorie-item.component.html',
  styleUrls: ['./categorie-item.component.scss'],
  providers: [CategoriesDataService]
})
export class CategorieItemComponent implements OnInit {

  @Input() categorie : Categorie;

  @Output() 
  deleteItem: EventEmitter<Categorie> = new EventEmitter();

  constructor( private categoriesDataService: CategoriesDataService ) {}

  ngOnInit() {
  }

  deleteCategorie(categorie: Categorie) {
    this.deleteItem.emit(categorie);
  }

}
