import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from 'angularx-social-login';
import { UserService } from '../../shared/service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: any;

  constructor(
    private authService: SocialAuthService,
    private userService: UserService
  ) { }

  signOut(): void {
    this.authService.signOut();
    this.userService.user.name = 'User';
    this.userService.user.photoUrl = 'assets/img/myAvatar.png';
    this.user.id = '';
  }

  ngOnInit(): void {
    this.user = this.userService;
  }

}
