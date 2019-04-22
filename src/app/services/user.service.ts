import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class UserService {
  user;

  constructor(public http: HttpClient) { }

  findUserPets(mail) {
    const url = URL_SERVICIOS + 'users/' + mail ;
    return this.http.get(url).map((res: any) => {this.user = res.data; return res.data; });
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
    return this.http.post(url, body, httpOptions).map((res: any) => {
      return res;
      });
  }
}
