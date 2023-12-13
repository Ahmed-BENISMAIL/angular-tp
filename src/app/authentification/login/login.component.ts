import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public authService: AuthService, public router: Router) {}

  email: string = '';
  password: string = '';

  loginUser() {
    // Create an instance of the User class with the required properties
    const user: User = {
      _id: {}, // Set the actual value for _id, it appears to be an object
      email: this.email,
      password: this.password,
      firstname: '', // Set the actual value for firstname
      lastname: ''   // Set the actual value for lastname
    };

    this.authService.signIn(user);
  }
}
