import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-sing-up-dialog',
  templateUrl: './sing-up-dialog.component.html',
})
export class SingUpDialogComponent implements OnInit {

  form: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  today;
  busy;

  constructor(
    private _formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<SingUpDialogComponent>,
    private snackBar: MatSnackBar,
    private _userService: UserService,
    @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
    this.busy = false;
    this.today = new Date();
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      email: ['', Validators.email]
    });
    this.thirdFormGroup = this._formBuilder.group({
      password: ['', Validators.minLength(4)]
    });

    this.fourthFormGroup = this._formBuilder.group({
      phone: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      birthday: ['', Validators.required]
    });

    this.sixthFormGroup = this._formBuilder.group({
      gender: ['', Validators.required]
    });
  }


  save() {
    this.busy = true;
    this._userService.create(
      this.firstFormGroup.value.name,
      this.thirdFormGroup.value.password,
      this.secondFormGroup.value.email,
      this.fourthFormGroup.value.phone,
      this.sixthFormGroup.value.gender
    ).subscribe(res => {
      this.busy = false;
        this.openSnackBar();
        this.dialogRef.close(this.secondFormGroup.value.email);
      },
      error => {
        this.busy = false;
      switch (error.status) {
        case 412: this.openErroredSnackBar('Ya existe un usuario con ese Email'); break;
        default: this.openErroredSnackBar('Error inesperado, intente de nuevo mas tarde'); break;
      }
      console.log(error);
      });
    }

  openSnackBar() {
    this.snackBar.open('Usuario agregado', 'HECHO', {
      duration: 2000,
    });
  }

  openErroredSnackBar(message) {
    this.snackBar.open(message, 'ERROR', {
      duration: 2000,
    });
  }

  close() {
    this.dialogRef.close();
  }
}
