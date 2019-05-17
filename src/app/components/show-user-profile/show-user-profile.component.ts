import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material';
import { ChangePhotoComponent } from '../change-photo/change-photo.component';

import { URL_PHOTO_SERVICE } from '../../../config/config';

@Component({
  selector: 'app-show-user-profile',
  templateUrl: './show-user-profile.component.html'
})
export class ShowUserProfileComponent implements OnInit {

  user;
  showButton = false;
  srcPhoto;

  constructor(private _userService: UserService, public dialog: MatDialog) {
    this.setVariables();
    this._userService.userLogged$.subscribe(res => this.setVariables());
   }

  ngOnInit() {
  }

  setVariables() {
    this.user = this._userService.userLogged;
    this.srcPhoto = this.user.image;
  }

  changePhoto() {

    const dialogRef = this.dialog.open(ChangePhotoComponent, {
      height: '400px',
      width: '600px',
      data: { imgSrc : this.srcPhoto,
              class : 'users' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

