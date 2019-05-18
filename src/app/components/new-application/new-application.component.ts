import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '../../services/application.service';
import { FormControl } from '@angular/forms';

import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html'
})
export class NewApplicationComponent implements OnInit {

  vaccines;
  date;
  vaccineSelected;

  constructor(private _applicationService: ApplicationService, public snackBar: MatSnackBar) {
    // Busco todas las vacunas disponibles en sistema para ofrecerlas como opcion
    this._applicationService.getAllVaccines().subscribe(res => this.vaccines = res );
    this.date = new FormControl(new Date());

   }

  ngOnInit() {
  }

  addVaccine() {
    if (!this.vaccineSelected || !this.date.value) {
      this.erroredSnackBar( 'Por favor, completa todos los campos');
    } else {
       this._applicationService.postVaccine(this.vaccineSelected._id, this.date.value.toISOString())
                               .subscribe(res => {this.successSnackBar('Vacuna agregada');
                                                  this.date.value = null,
                                                  this.vaccineSelected = null; });
    }
  }

  checkEvent(event) {
    this.date.value = event.value;
  }

  successSnackBar(msj ) {
    this.snackBar.open(msj , 'HECHO', {
      duration: 2000,
    });
  }

    erroredSnackBar(msj) {
    this.snackBar.open(msj , 'ERROR', {
      duration: 2000,
    });
  }
}
