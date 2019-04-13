import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-pet-profile',
  templateUrl: './pet-profile.component.html'
})
export class PetProfileComponent implements OnInit {

  constructor(public _petService: PetService) { }


  ngOnInit() {
  }

}
