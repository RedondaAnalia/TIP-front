import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html'
})
export class NewPetComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  today;

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService,
              private snackBar: MatSnackBar,
              // private dialogRef: MatDialogRef<NewPetComponent>
              ) {}

  ngOnInit() {
    this.today = new Date();
    this.firstFormGroup = this._formBuilder.group({
      name: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      birthday: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      castrate: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      gender: ['', Validators.required]
    });
  }


  setDate($event) {
    this.secondFormGroup.value.birthday = $event.value.toISOString();
  }

  submit() {
    this._userService.addPet(this.firstFormGroup.value.name,
                            this.secondFormGroup.value.birthday,
                            this.thirdFormGroup.value.castrate,
                            this.fourthFormGroup.value.gender
                    ).subscribe(res => {
                      this.openSnackBar();
                 //     this.dialogRef.close();
                    });
  }

  openSnackBar() {
    this.snackBar.open('Mascota agregada', 'HECHO', {
      duration: 2000,
    });
  }
}
