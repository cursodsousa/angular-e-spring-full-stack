import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  loginError: boolean;

  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  onSubmit(){
    
    this.authService
      .attemptLogin(this.username, this.password)
      .subscribe(
        response => {
          localStorage.setItem('token', JSON.stringify(response))
          this.router.navigate(['/home'])
          this.loginError = false;
        },
        erro => {
          this.loginError = true;
        }
      )
  }

}
