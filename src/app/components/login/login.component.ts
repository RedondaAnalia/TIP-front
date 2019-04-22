import { Component, OnInit } from '@angular/core';
import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

const swal: SweetAlert = _swal as any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  pass;
  constructor(private _userService: UserService, private router: Router) {
   }

  ngOnInit() {
  }

  login() {
    if (!this.user || !this.pass) {
      swal( 'Por favor completa los campos', '' , 'error');
    } else {
      this._userService.login(this.user, this.pass).subscribe(
        (data: any) => {
          this.router.navigate(['/userProfile']);
        },
        error => {
          swal(error.error.mensaje, '', 'error');
        }
      );
    }
  }

}
