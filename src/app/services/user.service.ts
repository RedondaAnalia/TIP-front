import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {

  userLogged;
  userToken;

  private userLoggedSubject = new Subject<any>();
  userLogged$ = this.userLoggedSubject.asObservable();

  constructor(public http: HttpClient) { }

  reset() {
    this.userLogged = null;
    this.userToken = null;
  }

  findUserPets(mail) {
    const url = URL_SERVICIOS + 'users/' + mail ;
    return this.http.get(url).map((res: any) => res.data );
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
                    .map((res: any) => {console.log(res.usuario);
                                        this.userLogged = res.usuario;
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
                    .map((res: any) => {console.log(res.user);
                                        this.userLogged = res.user;
                                        this.userLoggedSubject.next(this.userLogged);
                                        return res;
                                        });
  }
}
