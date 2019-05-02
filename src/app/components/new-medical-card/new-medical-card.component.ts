import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-new-medical-card',
  templateUrl: './new-medical-card.component.html'
})
export class NewMedicalCardComponent implements OnInit {

  diagnostic;
  title;
  constructor(private _petService: PetService, public snackBar: MatSnackBar, public dialogRef: MatDialogRef<NewMedicalCardComponent>) { }

  ngOnInit() {
  }

  addToMedicalHistory() {
    if (!this.diagnostic || !this.title) {
      swal('Debes completar todos los campos', '', 'error');
    } else {
    this._petService.addMedicalCard(this.title, this.diagnostic).subscribe(res => {
      this.openSnackBar();
      this.diagnostic = null;
      this.title = null;
      this.dialogRef.close();
    });
  }
  }


  openSnackBar() {
    this.snackBar.open('Historia agregada', 'HECHO', {
      duration: 2000,
    });
  }
}

