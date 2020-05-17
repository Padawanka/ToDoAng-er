import { Component, OnInit, EventEmitter, Output, Input, Injectable } from '@angular/core';
import { FetchFromLocalStorageService } from '../fetch-from-local-storage.service';
import { IdValueService } from '../id-value.service';
import { DeleteIdValueService } from '../delete-id-value.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  idNum: number;
  emittin: number;
  taskDesc: string;
  subscription;

  @Input() counter: number;

  constructor(private storageService: FetchFromLocalStorageService, public IdValuesService: IdValueService, public DeleteId: DeleteIdValueService) {
  }

  ngOnInit(): void {
    this.idNum=this.counter;
    this.taskDesc = this.getTaskDescription(this.idNum);
  }

  onTaskDelete() {
    this.DeleteId.updateId(this.idNum);
  }

  sendIdData():void {
    this.IdValuesService.updateId(this.idNum);
  }

  writeToStorage(event: any) {
    let taskData = new ToDoItemData();
    taskData.Completed = false;
    taskData.Id = this.idNum;
    taskData.TaskDescription = event.target.value;
    localStorage.setItem(this.idNum.toString(), JSON.stringify(taskData));
  }

  getTaskDescription(id):string {
    if(localStorage.getItem(id.toString()) != null) {
      return JSON.parse(localStorage.getItem(id.toString())).TaskDescription;
    } else {
      return 'Write your task here'
    }
  }


}

export class ToDoItemData {
  public Id:number;
  public TaskDescription:string;
  public Completed:boolean;
}