import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-friends-list-component',
  templateUrl: './my-friends-list.component.html'
})
export class MyFriendsListComponent implements OnInit {

  friends;

  constructor(private _userService: UserService,
              private router: Router) {
    this._userService.getFriends().subscribe(res => {
      this.friends = res;
      this.sanearLista();
    });
    console.log(this.friends);
    this._userService.userFriends$.subscribe(res => {console.log(res); } );
  }

  ngOnInit() {
  }

  irABuscarUsuarios() {
    this.router.navigate(['/searchFriends']);

  }

  sanearLista() {
    this.friends = this.friends.filter(x => x.length > 0);
  }

}
