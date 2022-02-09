import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserAuthService } from '../services/user-auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName:string
  isUserExist: boolean=false;
  constructor(private authService: UserAuthService,
    private route:Router,
    private users:UsersService) { 
      this.isUserExist= this.authService.isUserExist;
     this.userName=this.users.userName
    }
  
  ngOnInit(): void {
    this.authService.getloggedStatus().subscribe(status=>{
      this.isUserExist=status;})
      this.userName= this.authService.user

  }
  logout()
  { 
    
    this.authService.logout();
    confirm("Are u sure?!");
    this.isUserExist= this.authService.isUserExist;
    this.userName= this.authService.user
    this.route.navigate(['/home'])
  }

}
