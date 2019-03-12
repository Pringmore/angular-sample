import { Injectable } from '@angular/core';
import { Categorie } from '../shared/Models/categories.model';
import { element } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataService {

  categories : Categorie[]= [
    {
      id: 0,
      title : 'RomanceRomance',
      description: 'Find some flavor of romance ...'
    },
    {
      id: 1,
      title : 'Action',
      description: 'Let yourself diving into the scenes'
    },
    {
      id: 2,
      title : 'Drama',
      description: 'Let yourself diving into the scenes'
    },
    {
      id: 3,
      title : 'Fantasy',
      description: 'Let yourself diving into the scenes'
    },
    {
      id: 4,
      title : 'War',
      description: 'Let yourself diving into the scenes'
    },
    {
      id: 5,
      title : 'Anime',
      description: 'Let yourself diving into the scenes'
    }
  ];

  constructor() { }

  addCategorie(categorie: Categorie): CategoriesDataService {
    if (this.categories.length)
    categorie.id = this.categories[this.categories.length-1].id + 1;
    else
    categorie.id = 0;

    this.categories.unshift(categorie);
    return this;
  }

  deleteCategorie(id: number): CategoriesDataService {
    this.categories = this.categories.filter(element => element.id !== id);
    return this;
  }

  getAllCategories(): Categorie[] {
    return this.categories;
  }
}
