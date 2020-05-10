import { Component, OnInit } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskDoneComponent } from '../task-done/task-done.component';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  newtasks: Array<NewTaskComponent> = [];
  finishedTasks: Array<TaskDoneComponent> = [];

  constructor() { }

  ngOnInit(): void {
  }

  addATask() {
    let newTask = new NewTaskComponent();
    this.newtasks.push(newTask);
  }


  displayEmitt(id) {   
    this.finishedTasks.push(this.newtasks[id]);
    this.newtasks.splice(id, 1)
  }



}
