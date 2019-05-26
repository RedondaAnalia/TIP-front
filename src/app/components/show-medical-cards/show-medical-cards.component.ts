import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';

import { UserService } from '../../services/user.service';
import { MatDialog } from '@angular/material';
import { NewMedicalCardComponent } from '../new-medical-card/new-medical-card.component';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

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

    html2canvas(document.getElementById('medical-content'), {
      // Opciones
      allowTaint: true,
      useCORS: false,
      // Calidad del PDF
      scale: 1
    }).then(function(canvas) {
      const img = canvas.toDataURL('image/png');
      const doc = new jsPDF('p', 'mm', 'A4');
      doc.addImage(img, 'PNG', 7, 20);
      doc.save('medicalPDF.pdf');
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewMedicalCardComponent, {
      height: '450px',
      width: '600px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.medicalCards = this._petService.pet.medical_story;
    });
  }


}
