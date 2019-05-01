import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

@Component({
  selector: 'app-show-medical-cards',
  templateUrl: './show-medical-cards.component.html'
})
export class ShowMedicalCardsComponent implements OnInit {

  medicalCards;
  constructor(private _petService: PetService) {
    this.medicalCards = this._petService.pet.medical_story;
   }

  ngOnInit() {
  }

}
