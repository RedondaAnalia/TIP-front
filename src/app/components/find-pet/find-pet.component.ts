import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet-service';
import 'rxjs/add/operator/catch';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-find-pet',
  templateUrl: './find-pet.component.html',
})
export class FindPetComponent implements OnInit {

  input;
  error = false;
  busy = false;

  constructor(
    private router: Router,
    private _petService: PetService
  ) { }

  ngOnInit() {
  }


  find() {
    this.error = false;
    this.busy = true;
    this._petService.findPetById(this.input).subscribe(
      (data: any) => {
        this.busy = false;
        this._petService.pet = data.savedPet;
        this.router.navigate(['/petProfile']);
      },
      error => {
        this.busy = false;
        swal('Importante', error.error.mensaje, 'error');
      }
    );
  }

}
