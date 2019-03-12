import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActorsRoutingModule } from './actors-routing.module';
import { ActorListComponent } from './actor-list/actor-list.component';
import { MaterialModule } from '../shared/material.module';

@NgModule({
  declarations: [ActorListComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule,
    MaterialModule
  ]
})
export class ActorsModule { }
