import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet-service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;
  busy;
  constructor(private _userService: UserService,
              private snackBar: MatSnackBar,
              private router: Router,
              private _petService: PetService) {
    this.busy = false;
    this._userService.signOut();
   }

  ngOnInit() {
  }

  login() {
    if (!this.user || !this.pass) {
      this.erroredSnackBar( 'Por favor completa los campos');
    } else {
      this.busy = true;
      this._userService.login(this.user, this.pass).subscribe(
        (data: any) => {
          this.busy = false;
          switch (data.usuario.role) {
            case 'USER_ROLE': this._petService.pets = data.usuario.pets,
                             this.router.navigate(['/myPets']); break;
            case 'VET_ROLE': this.router.navigate(['/findPet']); break;
          }
        },
        error => {
          this.busy = false;
          this.erroredSnackBar(error.error.mensaje);
        }
      );
    }
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
