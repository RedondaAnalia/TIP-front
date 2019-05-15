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
    this.user = this._userService.userLogged;
    this.user.image !== null ? this.srcPhoto = (URL_PHOTO_SERVICE + this.user.image) : this.srcPhoto = null ;
    console.log(this.srcPhoto);
    this._userService.userLogged$.subscribe(res => {this.user = res;
      console.log(this.user);
                                                    // tslint:disable-next-line:max-line-length
                                                    this.user.image !== null ? this.srcPhoto = (URL_PHOTO_SERVICE + this.user.image) : this.srcPhoto = null ;
                                                    console.log(this.srcPhoto); });
   }

  ngOnInit() {
  }

  changePhoto() {

    const dialogRef = this.dialog.open(ChangePhotoComponent, {
      height: '400px',
      width: '600px',
      data: { imgSrc : this.srcPhoto }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

  }

