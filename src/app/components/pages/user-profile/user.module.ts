import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { USER_ROUTES } from './user-profile.routes';
import { PetsListComponent } from '../../pets-list/pets-list.component';

@NgModule({
  imports: [
    CommonModule,
    USER_ROUTES,
//    PetsListComponent
  ],
  exports: [
  //  PetsListComponent
  ],
  declarations: [
  ]
})
export class UserModule { }
