import { Injectable } from '@angular/core';
import {Auth, signInWithPopup,GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : Auth) {}
  idToken: string = '';
  async login(){
    const credential = await signInWithPopup(this.auth, new GoogleAuthProvider());
    this.idToken = await credential.user.getIdToken()
    console.log(this.idToken);
  }
}
