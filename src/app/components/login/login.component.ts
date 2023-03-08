import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from '../../services/auth-firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  formLogin: FormGroup;

  constructor(
    private authFirebaseService: AuthFirebaseService,
    private router: Router
  ){
    this.formLogin = new FormGroup({
      email: new FormControl,
      password: new FormControl
    })
  }

  onSubmit(){
    console.log(this.formLogin.value)
    this.authFirebaseService.login(this.formLogin.value)
    .then(response => {
      console.log(response)
      this.router.navigate(['/home'])
    })
    .catch(error => console.log(error))
  }

  loginWithGoogle(){
    this.authFirebaseService.loginWithGoogle()
    .then(response => {
      console.log(response);
      this.router.navigate(['/home'])
    })
    .catch(error => console.log(error))
  }
}
