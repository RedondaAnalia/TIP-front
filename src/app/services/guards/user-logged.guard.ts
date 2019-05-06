import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable()
export class UserLoggedGuard implements CanActivate {
  constructor(private _userService: UserService, private router: Router) {}

  canActivate () {
    if (this._userService.userLogged.role === 'USER_ROLE') {
      return true;
    } else {
      console.log('Bloqueado por el guard');
      this.router.navigate(['/login']);
    }
  }
}
