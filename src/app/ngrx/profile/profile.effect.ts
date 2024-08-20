import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {ProfileService} from "../../Services/profile.service";
import * as ProfileActions from "./profile.action";
import {switchMap, map, catchError, of} from "rxjs";
@Injectable()
export class ProfileEffect{
  constructor(private actions$: Actions,
              private profileService:ProfileService){
  }
  getAllProfiles$ = createEffect(() => this.actions$.pipe(
    ofType(ProfileActions.getAllProfiles),
    switchMap(() => {
      return this.profileService.getAllProfiles().pipe(
        map((profiles) =>
          ProfileActions.getAllProfilesSuccess(
            {profiles: profiles})),
        catchError((error) => {
          return of(ProfileActions.getAllProfilesFailure({error: error}));
        })
      )
    })
  ))
}
