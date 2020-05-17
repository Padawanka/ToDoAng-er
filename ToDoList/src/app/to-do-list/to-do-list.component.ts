import { Component, OnInit } from '@angular/core';
import { NewTaskComponent } from '../new-task/new-task.component';
import { TaskDoneComponent } from '../task-done/task-done.component';
import { IdValueService } from '../id-value.service';
import { DeleteIdValueService } from '../delete-id-value.service';
import { Subscription } from 'rxjs';
import { FetchFromLocalStorageService } from '../fetch-from-local-storage.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
})
export class ToDoListComponent implements OnInit {

  newtasks: Array<number> = [];
  finishedTasks: Array<number> = [];
  counter: number = 0;
  localKeys:Array<any>;

  taskDescription: string;

  DeleteSubscription: Subscription;
  IdSubscription: Subscription;
 

  constructor(public idValue: IdValueService, public deleteId: DeleteIdValueService, private storageService: FetchFromLocalStorageService) {
    this.IdSubscription = this.idValue.getId().subscribe(id => {
      this.finishedTasks.push(id);
      let indexNum = this.newtasks.findIndex(element => element===id);
      this.newtasks.splice(indexNum, 1);
      this.taskDescription = this.checkForDescription(id);
      let thistask = JSON.parse(this.storageService.getFromLS(id.toString()));
      thistask.Completed = true;
      this.storageService.writeToLS(id.toString(), JSON.stringify(thistask));
    });
    this.DeleteSubscription = this.deleteId.getId().subscribe(id => {
      let indexNum = this.newtasks.findIndex(element => element===id);
      this.newtasks.splice(indexNum, 1);
      this.storageService.removeItem(Number(id));
      this.taskDescription = this.checkForDescription(id);
     });
   }

  ngOnInit(): void {
    
  }

  addATask() {    
    this.counter += 1;  
    this.newtasks.push(this.counter);    
  }

  moveToFinished(idNum) {
    let indexNum = this.newtasks.findIndex(element => element = idNum);
    this.finishedTasks.push(indexNum);
    localStorage.getItem(indexNum.toString());
    this.newtasks.splice(indexNum, 1);
  }

  getTaskDescription(id) {
    return JSON.parse(localStorage.getItem(id.toString())).TaskDescription;
  }

  checkForDescription(id):string {
    if (localStorage.getItem(id.toString()) != null){
      return JSON.parse(localStorage.getItem(id.toString())).TaskDescription;
    } else {
      return 'Give youtself a task, man!'; 
    }
  }



}

