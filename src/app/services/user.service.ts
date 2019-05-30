import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_PHOTO_SERVICE } from '../../config/config';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  userLogged;
  userToken;
  petOwner;

  private userLoggedSubject = new Subject<any>();
  userLogged$ = this.userLoggedSubject.asObservable();

  constructor(public http: HttpClient, private router: Router) { }

  signOut() {
    this.userLogged = null;
    this.userToken = null;
    this.router.navigate(['/login']);
  }

  processImages() {
    this.userLogged.image !== null ? this.userLogged.image = URL_PHOTO_SERVICE + this.userLogged.image : this.userLogged.image = null ;
    this.userLogged.pets.map( (x) => this.processPhoto(x) );
  }

  processPhoto(pet) {
    pet.image !== null ? pet.image = (URL_PHOTO_SERVICE + pet.image) : pet.image = null;
  }

  findUserPets(mail) {
    const url = URL_SERVICIOS + 'users/' + mail ;
    return this.http.get(url).map((res: any) => {this.petOwner = mail;
                                                  res.data.pets.map( (x) => this.processPhoto(x));
                                                return res.data; } );
  }

  login(user, pass) {
    const url = URL_SERVICIOS + 'login';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const body = {
        email : user,
        password : pass
      };
    return this.http.post(url, body, httpOptions)
                    .map((res: any) => {this.userLogged = res.usuario;
                                        this.processImages();
                                        this.userLoggedSubject.next(this.userLogged);
                                        this.userToken = res.token;
                                        return res;
                                        });
  }

  addPet(petName, birthday, castrate, gender) {
    const url = URL_SERVICIOS + 'users/pet?token=' + this.userToken;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const body = {
      user_id: this.userLogged._id,
      pet : {
        name : petName,
        date_of_birth : birthday,
        castrate: castrate,
        gender: gender
       }
    };
    return this.http.post(url, body, httpOptions)
                    .map((res: any) => {this.userLogged = res.user;
                                        this.processImages();
                                        this.userLoggedSubject.next(this.userLogged);
                                        return res;
                                        });
  }

  changePhoto(file) {
    const url = URL_SERVICIOS + 'users/image';
      const formData = new FormData();
      formData.append('id', this.userLogged._id);
      formData.append('image', file);
        return this.http.put(url, formData)
                        .map((res: any) => { this.userLogged = res.data;
                                            this.processImages();
                                            this.userLoggedSubject.next(this.userLogged);
                                            });
  }
}
