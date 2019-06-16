import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material';
import { NewMedicalCardComponent } from '../new-medical-card/new-medical-card.component';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import { PdfViewComponent } from '../pdf-view/pdf-view.component';

declare var $;

@Component({
  selector: 'app-show-medical-cards',
  templateUrl: './show-medical-cards.component.html'
})
export class ShowMedicalCardsComponent implements OnInit {

  medicalCards;
  userRole;
  constructor(private _petService: PetService, private _userService: UserService, public dialog: MatDialog ) {
    this.medicalCards = this._petService.pet.medical_story;
    this.userRole = this._userService.userLogged.role;
   }

  ngOnInit() {
  }

  downloadPDF() {
    const dialogRef = this.dialog.open(PdfViewComponent, {
      height: '90%',
      width: '800px',
      data: { medicalCards : this.medicalCards}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewMedicalCardComponent, {
       height: '400 px',
      width: '600 px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.medicalCards = this._petService.pet.medical_story;
    });
  }


}
