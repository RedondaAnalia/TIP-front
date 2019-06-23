import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { URL_SERVICIOS, URL_PHOTO_SERVICE } from '../../config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class PetService {

  public pet;
  petIndex;
  public pets;

  private petListSubject = new Subject<any>();
  private petSubject = new Subject<any>();
  petList$ = this.petListSubject.asObservable();
  pet$ = this.petSubject.asObservable();


  constructor( public http: HttpClient, private _userService: UserService) {
    this._userService.userLogged$.subscribe(user => {
      this.pets = user.pets;
      this.petListSubject.next(this.pets);
    });
   }

  findPetById(id: String) {
    const url = URL_SERVICIOS + 'pets/' + id;
    return this.http.get(url);
  }

  applyVaccine(pet_owner_email, applicationId, date, index) {
    const url = URL_SERVICIOS + 'applications/apply?token=' + this._userService.userToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const body = {
      pet_owner_email: pet_owner_email,
      application_id: applicationId,
      application_date: date,
      email: this._userService.userLogged.email
    };

    return this.http.put(url, body, httpOptions).map((res: any) => {
                                        this.pet.applications[index].application_date = body.application_date;
                                        return res;
                                        });
  }

  addMedicalCard(title, diagnostic) {
    const url = URL_SERVICIOS +  'pets/medicalCard?token=' + this._userService.userToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const body = {
      pet_id: this.pet._id,
      email: this._userService.userLogged.email,
      medicalCard: {
            title: title,
            diagnostic: diagnostic,
            veterinary: this._userService.userLogged._id
      }
    };

    return this.http.post(url, body, httpOptions).map((res: any) => {
      this.pet = res.pet;
      return res;
    });
  }

  changePhoto(file) {
    const url = URL_SERVICIOS + 'pets/image';
        const formData = new FormData();
        formData.append('id', this.pet._id);
        formData.append('image', file);
        return this.http.put(url, formData)
                        .map((res: any) => { this.pet = res.data;
                                             this.pets[this.petIndex] = this.pet;
                                             this.petSubject.next(this.pet);
                                            });
  }

}

