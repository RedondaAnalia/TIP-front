import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet-service';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;
  busy;
  constructor(private _userService: UserService, private router: Router, private _petService: PetService) {
    this.busy = false;
    this._userService.signOut();
   }

  ngOnInit() {
  }

  login() {
    if (!this.user || !this.pass) {
      swal( 'Por favor completa los campos', '' , 'error');
    } else {
      this.busy = true;
      this._userService.login(this.user, this.pass).subscribe(
        (data: any) => {
          this.busy = false;
          switch (data.usuario.role) {
            case 'USER_ROLE': this._petService.pets = data.usuario.pets,
                             this.router.navigate(['/myPets']); break;
            case 'VET_ROLE': this.router.navigate(['/findPet']); break;
            default: swal('El rol obtenido es inesperado:' + data.usuario.role, '', 'error'); break;
          }
        },
        error => {
          this.busy = false;
          swal(error.error.mensaje, '', 'error');
        }
      );
    }
  }

}
