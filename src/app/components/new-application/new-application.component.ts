import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { ShowVaccinesComponent } from '../show-vaccines/show-vaccines.component';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html'
})
export class NewApplicationComponent implements OnInit {

  vaccines;
  constructor(private _applicationService: ApplicationService) {
    this._applicationService.getAllVaccines().subscribe(res => this.vaccines = res );
   }

  ngOnInit() {
  }

  addVaccine() {
    console.log('Agregue la vacuna!');
  }



}
