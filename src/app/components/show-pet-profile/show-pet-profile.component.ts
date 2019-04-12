import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

@Component({
  selector: 'app-show-pet-profile',
  templateUrl: './show-pet-profile.component.html'
})
export class ShowPetProfileComponent implements OnInit {

  constructor(public _petService: PetService) { }

  ngOnInit() {
  }

}
