import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html'
})
export class PetsListComponent implements OnInit {

  pets;
  url;

  constructor(private _petService: PetService, private router: Router) {
    this.pets = this._petService.pets;
    console.log(this.pets);
    this.url = this.router.routerState.snapshot.url;
  }

  ngOnInit() {
  }

  irAPerfil(pet) {
    this._petService.findPetById(pet._id).subscribe(( res: any) => {
      this._petService.pet = res.pet;
      switch (this.url) {
        case '/myPets': this.router.navigate(['/myPet']); break;
        default: this.router.navigate(['/petProfile']); break;
      }
    });
  }

}
