import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Profile} from "../Models/profile.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient,private authservice : AuthService) {

  }
  getAllProfiles(){
   return this.http.get<Profile[]>(`${this.baseUrl}/profile/all`,
     {
       headers: {
         "Authorization": this.authservice.idToken
       }
     })
  }
}
