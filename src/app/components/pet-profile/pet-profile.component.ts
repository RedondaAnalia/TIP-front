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

  applyVaccine(application, index) {
    const body = {
      application_id: application._id,
      application_date: new Date().toISOString();
    };

    this._petService.applyVaccine(body, index).subscribe((res) => console.log("Llegue al final!"));
  }

}
