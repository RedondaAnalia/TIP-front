import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet-service';
import 'rxjs/add/operator/catch';
import { HttpResponse } from '@angular/common/http';

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
        alert(error.error.mensaje);
      }
    );
  }

}
