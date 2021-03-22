import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user;
  constructor(
    private authService: SocialAuthService, 
    private userService: UserService
  ) { }
  signOut(){
    this.authService.signOut();
    this.userService.user.name = 'User';
    this.userService.user.photoUrl = 'assets/img/myAvatar.png';
    this.user.id = '';
    console.log(this.userService.user);
    
  }

  ngOnInit(): void {
    this.user = this.userService;
    console.log(this.user);
    
  }

}
