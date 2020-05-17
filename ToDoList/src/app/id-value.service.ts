import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IdValueService  {
  public id:number;

  constructor() {
    
  }

  private myId = new Subject<number>();

  getId(): Observable<number> {
    return this.myId.asObservable();
  }

  updateId(id:number) {
    this.myId.next(id);    
  }
}
