import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { CreateComponent } from './create/create.component';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [
    TodoComponent,
    CreateComponent,
    HeaderComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
