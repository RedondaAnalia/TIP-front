import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html'
})
export class SearchUsersComponent implements OnInit {

  searchResult;

  constructor(private _userService: UserService) { }

  ngOnInit() {
  }

  log($event) {
    this._userService.findUsers($event.target.value).subscribe(res => this.searchResult = res);
  }

}
