import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {
  id: string;
  emittin: string;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() deleteATask = new EventEmitter();

  onTaskDelete(event: Event):void {
    this.emittin =  event.path[2].id;
    this.deleteATask.emit(this.emittin)
  }



}
