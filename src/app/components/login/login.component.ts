import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user = {
    email: '',
    password: '',
  };

  constructor(
    private afAuth: AngularFireAuth,
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {
    this.signOut();
  }

  async onSubmit(form: any) {
    console.log(this.user);
    this.afAuth
      .signInWithEmailAndPassword(this.user.email, this.user.password)
      .then(() => {
        this._router.navigate(['home']);
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  signOut() {
    let logout = this._route.snapshot.paramMap.get('logout');
    if (logout == '1') {
      this.afAuth.signOut().then(async () => {
        console.log('close session');
        await this._router.navigate(['login']);
      });
    }
  }
}
