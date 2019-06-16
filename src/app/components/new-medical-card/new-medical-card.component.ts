import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

import { MatSnackBar, MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-new-medical-card',
  templateUrl: './new-medical-card.component.html'
})
export class NewMedicalCardComponent implements OnInit {

  diagnostic;
  title;
  constructor(private _petService: PetService,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<NewMedicalCardComponent>) { }

  ngOnInit() {
  }

  addToMedicalHistory() {
    if (!this.diagnostic || !this.title) {
      this.erroredSnackBar('Debes completar todos los campos');
    } else {
    this._petService.addMedicalCard(this.title, this.diagnostic).subscribe(res => {
      this.successSnackBar('Historia agregada');
      this.diagnostic = null;
      this.title = null;
      this.dialogRef.close();
    });
  }
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

