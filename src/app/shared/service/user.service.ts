import { Injectable } from '@angular/core';
import {User} from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User = {
    name: 'User',
    photoUrl: ''
  };
  constructor() { }
}
