import { Component, OnInit, Inject } from '@angular/core';
import { VALID_PHOTO_EXTENSIONS, MAX_PHOTO_SIZE } from '../../../config/config';

import { MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { PetService } from '../../services/pet-service';


@Component({
  selector: 'app-change-photo',
  templateUrl: './change-photo.component.html'
})
export class ChangePhotoComponent implements OnInit {

  imageSrc;
  image;


  constructor(private snackBar: MatSnackBar,
              private dialogRef: MatDialogRef<ChangePhotoComponent>,
              private _userService: UserService,
              private _petService: PetService,
              private router: Router,
              @Inject(MAT_DIALOG_DATA) private data: any) {

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
      this.erroredSnackBar('La foto debe pesar menos de 5 MB y tener extension .jpeg o .png');
    }
  }


  isValidPhoto(file) {
    const fileName = file.name.split('.');
    const extension = fileName[fileName.length - 1 ];
    return VALID_PHOTO_EXTENSIONS.indexOf(extension) >= 0 && file.size < MAX_PHOTO_SIZE  ;
  }


  changePhoto() {
    if (!this.image) {
       this.erroredSnackBar('Debe elegir una foto valida!');
    } else {
      let chosenService;
      switch (this.data.class) {
        case ('pets') : chosenService = this._petService; break;
        case ('users') : chosenService = this._userService; break;
      }
      chosenService.changePhoto(this.image).subscribe(res => {
        this.successSnackBar('Foto cambiada!');
        this.dialogRef.close();
      });
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
