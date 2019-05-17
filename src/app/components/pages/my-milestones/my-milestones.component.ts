import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-my-milestones',
  templateUrl: './my-milestones.component.html'
})
export class MyMilestonesComponent implements OnInit {

  milestones;
  points;

  constructor(private _userService: UserService) {
    this.points = this._userService.userLogged.experience;
    this.milestones = this._userService.userLogged.milestones;
    this._userService.userLogged$.subscribe((res: any) => {console.log(res); this.milestones = res.milestones; });
   }

  breakpoint = 3;  // to adjust to screen

  ngOnInit() {
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }

}
