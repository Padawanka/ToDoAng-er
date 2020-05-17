import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DeleteIdValueService {

  public id:number;

  constructor() {
  }

  public myId = new Subject<any>();

  getId(): Observable<any> {
    return this.myId.asObservable();
  }

  updateId(id:number) {
     this.myId.next(id); 
  }
}
