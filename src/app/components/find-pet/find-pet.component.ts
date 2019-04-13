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
  busy = false;

  constructor(
    private router: Router,
    private _petService: PetService
  ) { }

  ngOnInit() {
  }


  find() {
    this.busy = true;
    this._petService.findPetById(this.input).subscribe(
      (data: any) => {
        this._petService.pet = data.pet;
        this.busy = false;
        this.router.navigate(['/petProfile']);
      },
      error => {
        this.busy = false;
        swal( 'No existe mascota con el id ' + this.input, '' , 'error');
      }
    );
  }

}
