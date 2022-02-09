import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName:string
  password:string
  isUserLogged: boolean=false;
  constructor(private authService: UserAuthService,
    private route:Router,
    private users:UsersService) {
      this.userName=this.users.userName
      this.password=this.users.password
     }

  ngOnInit() {
 
    this.isUserLogged= this.authService.isUserExist;
  }

  login()
  {
    this.authService.user=this.userName
    this.authService.password=this.password
    
    this.authService.login();
    this.isUserLogged= this.authService.isUserExist;
    this.route.navigate(["/addProduct"])
  }
}
