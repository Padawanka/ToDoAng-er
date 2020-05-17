import { Injectable } from '@angular/core';
import { Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchFromLocalStorageService {

  writeToLS(key: string, value: any):void {
    localStorage.setItem(key, value);
    console.log("I;m writing to LS");
  }

  getFromLS(key: string):string {
    console.log("I;m getting from LS");
    return localStorage.getItem(key);
  }

  getKeys():any {
    return Object.keys(localStorage);
  }

  removeItem(item:any) {
    localStorage.removeItem(item);
  }

}
