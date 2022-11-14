import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  menuState: BehaviorSubject<boolean>;
  constructor() {
      this.menuState= new BehaviorSubject(false);
   }
}
