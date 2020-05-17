import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDoneComponent } from './task-done/task-done.component';
import { FetchFromLocalStorageService } from './fetch-from-local-storage.service';
import { IdValueService } from './id-value.service';
import { DeleteIdValueService } from './delete-id-value.service';

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
  providers: [FetchFromLocalStorageService, IdValueService, DeleteIdValueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
