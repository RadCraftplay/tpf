import { Component } from '@angular/core';
import {firebaseConfig} from "../credentials";
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.css'
})
export class LoginButtonComponent {

  private app;

  constructor() {
    this.app = initializeApp(firebaseConfig);
  }

  login() {
    const provider = new GoogleAuthProvider();

    const auth = getAuth();
    if (auth.currentUser != null) {
      location.assign("/dashboard");
    }

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        // TODO -> user logged, handle that ;)
        console.log(user.uid);
        location.assign("/dashboard");
      }).catch((error) => {
      const email = error.customData.email;
      console.error("User with email: " + email + " attempted to login but error occured.")
    });
  }
}
