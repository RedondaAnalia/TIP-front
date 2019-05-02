import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class UserService {

  userLogged;
  userToken;

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
}
