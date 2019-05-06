import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-user-profile',
  templateUrl: './show-user-profile.component.html'
})
export class ShowUserProfileComponent implements OnInit {

  user;
  constructor(private _userService: UserService) {
    this.user = this._userService.userLogged;
   }

  ngOnInit() {
  }

}
