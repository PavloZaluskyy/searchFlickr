import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from '../../shared/service/user.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: SocialUser;
  loggedIn: boolean;
  
  constructor( 
    private authService: SocialAuthService, 
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

}
