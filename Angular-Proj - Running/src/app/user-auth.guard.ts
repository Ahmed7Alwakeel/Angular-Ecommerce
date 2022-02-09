import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './services/user-auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private userAuth: UserAuthService, private snakBar:MatSnackBar,
    private route:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userAuth.isUserExist)
      {
        return true;
      }
      else
      {
        this.snakBar.open('Please Log in First','',{
          duration:1000,
          verticalPosition:'top',
          horizontalPosition:'center',
 
        });
        this.route.navigate(['/login']);
        return false
      }
  }
  
}
