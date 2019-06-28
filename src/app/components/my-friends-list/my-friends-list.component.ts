import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-my-friends-list-component',
  templateUrl: './my-friends-list.component.html'
})
export class MyFriendsListComponent implements OnInit {

  friends;

  constructor(private _userService: UserService) {
    this._userService.getFriends().subscribe(res => {
      this.friends = res;
      this.sanearLista();
    });
    this._userService.userFriends$.subscribe(res => {console.log(res); } );
  }

  ngOnInit() {
  }


  sanearLista() {
    this.friends = this.friends.filter(x => x.length > 0);
  }

}
