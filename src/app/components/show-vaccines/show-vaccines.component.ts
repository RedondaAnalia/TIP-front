import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NewApplicationComponent } from '../new-application/new-application.component';

@Component({
  selector: 'app-show-vaccines',
  templateUrl: './show-vaccines.component.html'
})
export class ShowVaccinesComponent implements OnInit {

  date: String;
  vaccines;
  forma;

  constructor(public _petService: PetService, public dialog: MatDialog) {
    this.date = new Date().toISOString();
    this.vaccines = this._petService.pet.applications;

    this.forma = new FormGroup({
      'status': new FormControl('ALL')
    });

    this.forma.get('status').valueChanges.subscribe(
      val => {
        switch (val) {
          case 'APPLIED': this.filterAppliedVaccines(); break;
          case 'PENDING' : this.filterPendingVaccines(); break;
          case 'EXPIRED': this.filterExpiredVaccines(); break;
          default : this.vaccines = this._petService.pet.applications; break;
        }
      }
    );
   }

   filterAppliedVaccines() {
      const vac = this._petService.pet.applications;
      this.vaccines = vac.filter(app => app.application_date);
      return;
   }

   filterPendingVaccines() {
    const vac = this._petService.pet.applications;
     this.vaccines = vac.filter(app => !app.application_date);
      return ;
   }

   filterExpiredVaccines() {
    const vac = this._petService.pet.applications;
    this.vaccines = vac.filter(app => app.estimated_date <= this.date && !app.application_date);
    return;
  }


  ngOnInit() {
  }

  applyVaccine(application, index) {
    const body = {
      application_id: application._id,
      application_date: new Date().toISOString()
    };

    this._petService.applyVaccine(body, index).subscribe((res) => {});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewApplicationComponent, {
      height: '350px',
      width: '600px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
