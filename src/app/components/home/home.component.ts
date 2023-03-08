import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthFirebaseService } from 'src/app/services/auth-firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private authFirebaseService: AuthFirebaseService,
    private router: Router
  ){}

  logout(){
    this.authFirebaseService.logout()
    .then(
      ()=>{ 
        console.log('LOGOUT')
        this.router.navigate(['/login']);
      }
    )
    .catch(error => console.log(error))
  }

}
