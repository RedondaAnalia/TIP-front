import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html'
})
export class PetProfileComponent implements OnInit {

  pet;
  constructor(private _petService: PetService, private router: Router) {
    this.pet = this._petService.pet;
    this._petService.pet$.subscribe(res => this.pet = res);
   }


  ngOnInit() {
  }

  goBack() {
    switch (this.router.routerState.snapshot.url) {
      case('/myPet'): this.router.navigate(['/myPets']); break;
      case('/petProfile'): if (this._petService.pets.length <= 1 ) {
                            this.router.navigate(['/findPet']); break;
                          } else {
                            this.router.navigate(['/selectPet']); break;
                          }
    }
  }
}
