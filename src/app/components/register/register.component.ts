import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  formReg: FormGroup;
  constructor(
    private authFirebaseService: AuthFirebaseService,
    private router: Router
  ) {
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit() {
    console.log(this.formReg.value);
    this.authFirebaseService.register(this.formReg.value)
    .then(response => {
        console.log(response)
        this.router.navigate(['/home'])
      })
    .catch(error => console.log(error))

  }

}
