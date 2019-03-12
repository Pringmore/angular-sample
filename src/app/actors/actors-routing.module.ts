import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActorListComponent } from './actor-list/actor-list.component';
 
const routes: Routes = [
  {
    path: '',
    component: ActorListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActorsRoutingModule { }
