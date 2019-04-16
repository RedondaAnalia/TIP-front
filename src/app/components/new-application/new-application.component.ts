import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { FormControl } from '@angular/forms';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html'
})
export class NewApplicationComponent implements OnInit {

  vaccines;
  date;
  vaccineSelected;

  constructor(private _applicationService: ApplicationService) {
    // Busco todas las vacunas disponibles en sistema para ofrecerlas como opcion
    this._applicationService.getAllVaccines().subscribe(res => this.vaccines = res );
    this.date = new FormControl(new Date());

   }

  ngOnInit() {
  }

  addVaccine() {
    if (!this.vaccineSelected || !this.date.value) {
      swal( 'Por favor, completa todos los campos' , '' , 'error');
    } else {
      console.log(this.date.value);
       this._applicationService.postVaccine(this.vaccineSelected._id, this.date.value.toISOString())
                               .subscribe(res => console.log('volvi'));
    }
  }

  checkEvent(event) {
    this.date.value = event.value;
  }



}
