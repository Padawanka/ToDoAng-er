import { Component, OnInit, Input } from '@angular/core';
import { FetchFromLocalStorageService } from '../fetch-from-local-storage.service';
import { IdValueService } from '../id-value.service';
import { DeleteIdValueService } from '../delete-id-value.service';
import { Subscription } from 'rxjs';
import { ToDoItemData } from '../new-task/new-task.component'

@Component({
  selector: 'app-task-done',
  templateUrl: './task-done.component.html',
  styleUrls: ['./task-done.component.css']
})
export class TaskDoneComponent implements OnInit {

  Id: string;
  taskDesc:string;
  
  Completed:boolean;

  DeleteSubscription: Subscription;
  IdSubscription: Subscription;

  @Input() taskDescription:string;

  constructor(private storageService: FetchFromLocalStorageService, public idValue: IdValueService, public deleteId: DeleteIdValueService) {
  }

  ngOnInit(): void {
    this.taskDesc = this.taskDescription;
    this.IdSubscription = this.idValue.getId().subscribe(id => {
      this.Id = id.toString();
    });
  }


  writeToStorage(event: any) {
    let taskData = new ToDoItemData();
    taskData.Completed = true;
    taskData.TaskDescription = event.target.value;
    localStorage.setItem(this.Id, JSON.stringify(taskData));
  }

}
