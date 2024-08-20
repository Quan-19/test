import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ProfileState} from "../../ngrx/profile/profile.state";
import {Store} from "@ngrx/store";
import * as ProfileActions from "../../ngrx/profile/profile.action";
import {ProfileCardComponent} from "../../components/profile-card/profile-card.component";
import {AsyncPipe} from "@angular/common";
@Component({
  selector: 'app-list-profiles',
  standalone: true,
  imports: [
    ProfileCardComponent,
    AsyncPipe
  ],
  templateUrl: './list-profiles.component.html',
  styleUrl: './list-profiles.component.scss'
})
export class ListProfilesComponent {
  profile$!: Observable<ProfileState>;

  constructor(private store : Store <{profile : ProfileState}>) {
    this.store.dispatch(ProfileActions.getAllProfiles());

    this.store.select('profile', 'profiles').subscribe((state) => {
      console.log(state);
    });
  }
}
