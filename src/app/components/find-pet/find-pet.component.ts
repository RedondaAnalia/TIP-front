import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet-service';
import 'rxjs/add/operator/catch';
import { UserService } from '../../services/user.service';
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
    private _petService: PetService,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }


  find() {
    this.busy = true;
    this._userService.findUserPets(this.input).subscribe(
      (data: any) => {
        if (!data) {
          this.busy = false;
          swal( 'No existe un usuario con el mail ' + this.input, '' , 'error');
          return;
        }
        switch (data.pets.length) {
          case 0: swal('El usuario ' + data.name + ' no posee mascotas');
          this.busy = false;
                  break;
          case 1: this._petService.findPetById(data.pets[0]._id).subscribe(( res: any) => {
            this.busy = false;
            this._petService.pet = res.pet;
            this.busy = false;
            this.router.navigate(['/petProfile']);
          });
            break;
          default: this._petService.pets = data.pets;
                  this.router.navigate(['/selectPet']);
                  break;
        }
      },
      error => {
        this.busy = false;
        swal( 'No existe un usuario con el mail ' + this.input, '' , 'error');
        return;
      }
    );
  }

}
