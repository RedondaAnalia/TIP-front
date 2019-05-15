import { Component, OnInit, Inject } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';
import { VALID_PHOTO_EXTENSIONS, MAX_PHOTO_SIZE } from '../../../config/config';

import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../services/user.service';
const swal: SweetAlert = _swal as any;


@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html'
})
export class ChangePhotoComponent implements OnInit {

  imageSrc;
  image;


  constructor(private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<ChangePhotoComponent>,
              private _userService: UserService, @Inject(MAT_DIALOG_DATA) private data: any) {

                this.imageSrc = data.imgSrc;
              }

  ngOnInit() {
  }


  readURL(event): void {
    if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
        this.processPhoto(file);
    }
  }


  processPhoto(file) {
    if (this.isValidPhoto(file)) {
      this.image = file;
      const reader = new FileReader();
      reader.onload = e => this.imageSrc = reader.result;
      reader.readAsDataURL(file);
    } else {
      swal('La foto debe pesar menos de 5 MB y tener extension .jpeg o .png', '', 'error');
    }
  }


  isValidPhoto(file) {
    const fileName = file.name.split('.');
    const extension = fileName[fileName.length - 1 ];
    return VALID_PHOTO_EXTENSIONS.indexOf(extension) >= 0 && file.size < MAX_PHOTO_SIZE  ;
  }


  changePhoto() {
    if (!this.image) {
      swal ('Debe elegir una foto valida!');
    } else {
      this._userService.changePhoto(this.image).subscribe(res => {
        this.openSnackBar();
        this.dialogRef.close();
      });
    }
  }

    openSnackBar() {
    this.snackBar.open('Foto cambiada!', 'HECHO', {
      duration: 2000,
    });
  }
}
