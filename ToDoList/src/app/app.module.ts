import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDoneComponent } from './task-done/task-done.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    NewTaskComponent,
    TaskDoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
