import { Component, OnInit } from '@angular/core';
import { PetService } from '../../services/pet-service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { NewApplicationComponent } from '../new-application/new-application.component';
import { UserService } from '../../services/user.service';
import { applySourceSpanToExpressionIfNeeded } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-show-vaccines',
  templateUrl: './show-vaccines.component.html'
})
export class ShowVaccinesComponent implements OnInit {

  date: String;
  vaccines;
  forma;

  constructor(private _userService: UserService, public _petService: PetService, public dialog: MatDialog) {
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

  isVet() {
    return this._userService.userLogged.role === 'VET_ROLE';
  }


  ngOnInit() {
  }

  applyVaccine(application, index) {

    this._petService.applyVaccine(application._id, new Date().toISOString(), index).subscribe((res) => {});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewApplicationComponent, {
      height: '350px',
      width: '600px',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.vaccines = this._petService.pet.applications;
      console.log('The dialog was closed');
    });
  }

}
