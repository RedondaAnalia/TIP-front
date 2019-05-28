import { Component, OnInit, Inject, AfterViewInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PdfService } from '../../services/pdf.service';


@Component({
  selector: 'app-pdf-view',
  templateUrl: './pdf-view.component.html',
  styleUrls: ['./pdf-view.component.css']
})
export class PdfViewComponent implements OnInit, AfterViewInit {

  medicalCards: any;


  constructor(public dialogRef: MatDialogRef<PdfViewComponent>,
              private _pdfService: PdfService,
              @Inject(MAT_DIALOG_DATA) public data: any) {

      this.medicalCards = data.medicalCards;
     }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this._pdfService.downloadPDF(document.getElementById('medical-pdf'),)
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
