import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet-service';
import 'rxjs/add/operator/catch';
import { UserService } from '../../../services/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-find-pet',
  templateUrl: './find-pet.component.html',
})
export class FindPetComponent implements OnInit {

  input = undefined;
  busy = false;

  constructor(
    private router: Router,
    private _petService: PetService,
    private snackBar: MatSnackBar,
    private _userService: UserService
  ) { }

  ngOnInit() {
  }


  find() {
    if (this.input === undefined) {
      this.erroredSnackBar( 'Por favor ingrese un mail');
    } else {
    this.busy = true;
    this._userService.findUserPets(this.input).subscribe(
      (data: any) => {
        if (!data) {
          this.busy = false;
          this.erroredSnackBar( 'No existe un usuario con el mail ');
          return;
        }
        switch (data.pets.length) {
          case 0: this.erroredSnackBar('El usuario ' + data.name + ' no posee mascotas');
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
        this.erroredSnackBar( 'No existe un usuario con el mail ' + this.input);
        return;
      }
    );
  }
}

  signOut() {
    this._userService.signOut();
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
