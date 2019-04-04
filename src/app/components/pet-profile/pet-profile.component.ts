import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html'
})
export class PetProfileComponent implements OnInit {

  constructor(private _petService: PetService) { }

  private pet = this._petService.res.savedPet;
  ngOnInit() {
  }

}
