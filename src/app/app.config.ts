import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {provideHttpClient} from "@angular/common/http";
import { provideEffects } from '@ngrx/effects';
import {profileReducer} from "./ngrx/profile/profile.reducer";
import {ProfileEffect} from "./ngrx/profile/profile.effect";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideStore({
    "profile": profileReducer
  }),
    provideHttpClient(), provideEffects(ProfileEffect), provideFirebaseApp(() => initializeApp({"projectId":"fir-t-quan","appId":"1:929198429851:web:1bee38015166d8547b183e","storageBucket":"fir-t-quan.appspot.com","apiKey":"AIzaSyAAIETPmaXHlO6Fy70VTdvJNm03TrcdqIo","authDomain":"fir-t-quan.firebaseapp.com","messagingSenderId":"929198429851"})), provideAuth(() => getAuth())
  ]
};
