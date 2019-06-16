import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-friends-component',
  templateUrl: './my-friends.component.html'
})
export class MyFriendsComponent implements OnInit {

  friends;

  constructor(private _userService: UserService) {
    this._userService.getFriends().subscribe(res => {
      this.friends = res;
      this.sanearLista();
    });
    console.log(this.friends);
    this._userService.userFriends$.subscribe(res => {console.log(res); } );
  }

  ngOnInit() {
  }


  sanearLista() {
    this.friends = this.friends.filter(x => x.length > 0);
  }

}
