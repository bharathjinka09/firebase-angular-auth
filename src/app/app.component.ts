import { Component, OnInit } from '@angular/core';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'firebase-angular-auth';
  isSignedIn = false;
  constructor(public firebaseService: FirebaseService) {}

  ngOnInit() {
    if (localStorage.getItem('firebaseuser') !== null) this.isSignedIn = true;
    else this.isSignedIn = false;
  }
  async onSignup(email: string, password: string) {
    await this.firebaseService.signup(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
    alert('Registered Successfully!');
  }
  async onSignin(email: string, password: string) {
    await this.firebaseService.signin(email, password);
    if (this.firebaseService.isLoggedIn) this.isSignedIn = true;
    alert('Logged in Successfully!');
  }

  handleLogout() {
    this.isSignedIn = false;
    alert('Logged out Successfully!');
  }
}
