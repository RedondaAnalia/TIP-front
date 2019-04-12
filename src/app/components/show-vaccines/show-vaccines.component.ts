import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

@Component({
  selector: 'app-show-vaccines',
  templateUrl: './show-vaccines.component.html'
})
export class ShowVaccinesComponent implements OnInit {

  date: String;

  constructor(public _petService: PetService) {
    this.date = new Date().toISOString();
   }

  ngOnInit() {
  }

  applyVaccine(application, index) {
    const body = {
      application_id: application._id,
      application_date: new Date().toISOString()
    };

    this._petService.applyVaccine(body, index).subscribe((res) => {});
  }

}
