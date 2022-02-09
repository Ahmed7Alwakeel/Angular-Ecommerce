
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private loginState: BehaviorSubject<boolean>;
  user:string="";
  password:string="";

  constructor() {
    this.loginState=new BehaviorSubject<boolean> (this.isUserExist);
   }

  login()
  {
  
    localStorage.setItem(this.user, this.password);
    this.loginState.next(true);
  }

  logout()
  {
    localStorage.removeItem(this.user);
    this.loginState.next(false);
  }

  get isUserExist(): boolean
  {
    return  (localStorage.getItem(this.user))? true: false
  }

  getloggedStatus(): Observable<boolean>
  {
    return this.loginState.asObservable();
  }
}
