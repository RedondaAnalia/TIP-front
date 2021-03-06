import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PetService } from '../pet-service';

@Injectable()
export class SelectPetGuard implements CanActivate {

  constructor(private _pet: PetService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this._pet.pets) {
      return true;
    } else {
      console.log('Bloqueado por el guard');
      this.router.navigate(['/findPet']);
    }
  }
}
