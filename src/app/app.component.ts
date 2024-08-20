import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {ProfileService} from "./Services/profile.service";
import {ListProfilesComponent} from "./pages/list-profiles/list-profiles.component";
import {AuthService} from "./Services/auth.service";
import {Auth, onAuthStateChanged} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListProfilesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-profile';

  constructor(private profileService: ProfileService, private authservice : AuthService,private router: Router,private auth: Auth) {
    this.profileService.getAllProfiles().subscribe((data) => {
      console.log(data);
    })
  onAuthStateChanged(this.auth,async (user)=>{
    if(user){
      this.authservice.idToken = await user.getIdToken();
    }
  })
  }
  async login(){
    await this.authservice.login();
    this.router.navigate(['/profiles']);
  }
}
