import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {Router} from '@angular/router';
import {PetService} from '../../services/pet-service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html'
})
export class SearchUsersComponent implements OnInit {

  searchResult;
  myFriends: Array<any>;
  url: String;

  constructor(private _userService: UserService,
              private router: Router,
              private snackBar: MatSnackBar,
              private _petService: PetService) {
                this.url = this.router.routerState.snapshot.url;
                this._userService.userFriends$.subscribe(res => this.myFriends = res.map(x => x[0].email));
                this._userService.getFriends().subscribe();
               }

  ngOnInit() {
  }

  isFriend(email) {
    return this.myFriends.indexOf(email) >= 0;
  }

  isUserUrl() {
    return this.url === '/searchFriends';
  }

  log($event) {
    this._userService.findUsers($event.target.value).subscribe(res => {this.searchResult = res; } );
  }

  addFriend(email) {
    this._userService.addFriend(email).subscribe((res: any) => { if (res.ok) { this.myFriends.push(email); }
                                                                else { this.erroredSnackBar('Error agregando amigo :('); } });

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
