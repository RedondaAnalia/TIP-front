import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private _formBuilder: FormBuilder) {}

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

  submit() {
    // tslint:disable-next-line:max-line-length
    console.log(this.firstFormGroup.value.name + ' ' + this.secondFormGroup.value.birthday.toISOString() + ' ' + this.thirdFormGroup.value.castrate + ' ' + this.fourthFormGroup.value.gender);
  }

  setDate($event) {
    this.secondFormGroup.value.birthday = $event.value.toISOString();
  }

}
