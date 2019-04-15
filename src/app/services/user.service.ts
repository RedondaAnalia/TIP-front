import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable()
export class UserService {
  user;

  constructor(public http: HttpClient) { }

  findUserPets(mail) {
    const url = URL_SERVICIOS + 'users/' + mail ;
    return this.http.get(url).map((res: any) => {this.user = res.data; return res.data; });
  }
}
