import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit {

  constructor(private router: Router, private _userService: UserService) { }

  ngOnInit() {
  }

  viewPets() {
    this.router.navigate(['/myPets']);
  }

  signOut() {
    this._userService.signOut();
  }

  viewMilestones() {
    this.router.navigate(['/myMilestones']);
  }

  viewNearbyVeterinarians() {
    this.router.navigate(['/nearbyVeterinarians']);
  }
}
