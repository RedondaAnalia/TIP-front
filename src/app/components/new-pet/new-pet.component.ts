import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html'
})
export class NewPetComponent implements OnInit {

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fiveFormGroup: FormGroup;

  today;
  busy;

  constructor(private _formBuilder: FormBuilder,
              private _userService: UserService,
              private snackBar: MatSnackBar,
              private router: Router
              ) {}

  ngOnInit() {
    this.busy = false;
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
      specie: ['', Validators.required]
    });
    this.fiveFormGroup = this._formBuilder.group({
      gender: ['', Validators.required]
    });
  }


  setDate($event) {
    this.secondFormGroup.value.birthday = $event.value.toISOString();
  }

  submit() {
    this.busy = true;
    this._userService.addPet(this.firstFormGroup.value.name,
                            this.secondFormGroup.value.birthday,
                            this.thirdFormGroup.value.castrate,
                            this.fourthFormGroup.value.specie,
                            this.fiveFormGroup.value.gender
                    ).subscribe(res => {
                      this.busy = false;
                      this.openSnackBar();
                      this.router.navigate(['/myPets']);
                    });
  }

  openSnackBar() {
    this.snackBar.open('Mascota agregada', 'HECHO', {
      duration: 2000,
    });
  }
}
