import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Router} from "@angular/router";
import {PetService} from "../../services/pet-service";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html'
})
export class SearchUsersComponent implements OnInit {

  searchResult;

  constructor(private _userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar,
              private _petService: PetService) { }

  ngOnInit() {
  }

  log($event) {
    this._userService.findUsers($event.target.value).subscribe(res => this.searchResult = res);
  }


  onClick(index) {
    if (this.router.routerState.snapshot.url === '/findPet') {
      this._userService.findUserPets(this.searchResult[index].email).subscribe(data => {

          switch (data.pets.length) {
            case 0:
              this.erroredSnackBar('El usuario ' + data.name + ' no posee mascotas');
              break;
            case 1:
              this._petService.findPetById(data.pets[0]._id).subscribe((res: any) => {
                this._petService.pet = res.pet;
                this.router.navigate(['/petProfile']);
              });
              break;
            default:
              this._petService.pets = data.pets;
              this.router.navigate(['/selectPet']);
              break;
          }
        }
      );
    }
  }

  erroredSnackBar(msj) {
    this.snackBar.open(msj , 'ERROR', {
      duration: 2000,
    });
  }
}
