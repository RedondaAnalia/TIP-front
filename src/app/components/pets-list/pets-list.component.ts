import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Router } from '@angular/router';
import { URL_PHOTO_SERVICE } from '../../../config/config';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html'
})
export class PetsListComponent implements OnInit {

  pets;
  url;

  constructor(private _petService: PetService, private router: Router) {
    this.pets = this._petService.pets;
    this._petService.petList$.subscribe(res => {
      this.pets = this._petService.pets;
      console.log('pase por subscribe');
    });
  }

  ngOnInit() {
    this.url = this.router.routerState.snapshot.url;
    this.pets = this._petService.pets;
  }


  goToProfile(pet, index) {
    this._petService.findPetById(pet._id).subscribe(( res: any) => {
      this._petService.pet = res.pet;
      this._petService.petIndex = index;
      switch (this.url) {
        case '/myPets': this.router.navigate(['/myPet']); break;
        default: this.router.navigate(['/petProfile']); break;
      }
    });
  }

}
