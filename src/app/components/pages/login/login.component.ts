import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { PetService } from '../../../services/pet-service';
import { MatSnackBar , MatDialog, MatDialogConfig} from '@angular/material';
import {SingUpDialogComponent} from '../../sing-up-dialog/sing-up-dialog.component';


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
              private _petService: PetService,
              private dialog: MatDialog) {
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

  openDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(SingUpDialogComponent, dialogConfig);
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
