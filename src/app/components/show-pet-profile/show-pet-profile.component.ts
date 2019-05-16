import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { MatDialog } from '@angular/material';
import { ChangePhotoComponent } from '../change-photo/change-photo.component';
import { URL_PHOTO_SERVICE } from '../../../config/config';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-show-pet-profile',
  templateUrl: './show-pet-profile.component.html'
})
export class ShowPetProfileComponent implements OnInit {

  srcPhoto;
  pet;
  isUserRole;


  constructor(private _userService: UserService, private _petService: PetService, public dialog: MatDialog) {
    this.pet = this._petService.pet;
    this.pet.image !== null ? this.srcPhoto = (URL_PHOTO_SERVICE + this.pet.image) : this.srcPhoto = null ;
    this._petService.pet$.subscribe(res => {this.pet = res; this.srcPhoto = this.pet.image; });
   }

  ngOnInit() {
    this.isUserRole = this._userService.userLogged.role === 'USER_ROLE';
  }

  changePhoto() {
    const dialogRef = this.dialog.open(ChangePhotoComponent, {
      height: '400px',
      width: '600px',
      data: { imgSrc : this.srcPhoto,
              class : 'pets' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
