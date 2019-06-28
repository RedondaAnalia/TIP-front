import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS, URL_PHOTO_SERVICE } from '../../config/config';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  userLogged;
  friends;
  userToken;
  petOwner;

  private userLoggedSubject = new Subject<any>();
  userLogged$ = this.userLoggedSubject.asObservable();

  private userFriendsSubject = new Subject<any>();
  userFriends$ = this.userFriendsSubject.asObservable();

  constructor(public http: HttpClient, private router: Router) { }

  signOut() {
    this.userLogged = null;
    this.userToken = null;
    this.router.navigate(['/login']);
  }


  findUserPets(mail) {
    const url = URL_SERVICIOS + 'users/' + mail ;
    return this.http.get(url).map((res: any) => {this.petOwner = mail;
                                                return res.data; } );
  }

  getFriends() {
    // tslint:disable-next-line:quotemark
    const url = URL_SERVICIOS + "users/friends?mail='" + this.userLogged.email + "'";
    return this.http.get(url).map((res: any) => {this.friends = res.data;
                                                        this.userFriendsSubject.next(this.friends);
                                                        return this.friends; });
  }

  findUsers(query) {
    // tslint:disable-next-line:quotemark
    const url = URL_SERVICIOS + 'users/search?query=' + query ;
    return this.http.get(url). map((res: any) => res.data.filter(x => x[0]) );
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
                                        this.userLoggedSubject.next(this.userLogged);
                                        this.userToken = res.token;
                                        return res;
                                        });
  }

  create(name, pass, email, phone, gender) {
    const url = URL_SERVICIOS + 'users';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    const body = {
      name : name,
      email : email,
      gender: gender,
      phone: phone,
      password : pass};
    console.log(body);
    return this.http.post(url, body, httpOptions);
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
                                            this.userLoggedSubject.next(this.userLogged);
                                            });
  }

  addFriend(email) {
    const url = URL_SERVICIOS + 'friends/relationship';
    const body = {
      aMail: this.userLogged.email,
      bMail: email
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http.post(url, body, httpOptions).map((res: any) => res);
  }
}
