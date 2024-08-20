import {ProfileState} from "./profile.state";
import {createReducer, on} from "@ngrx/store";
import * as ProfileActions from "./profile.action";
const initialState: ProfileState = {
  profiles: [],
  profile: null,
  isLoading: false,
  error: '',
};
export const profileReducer = createReducer(initialState,on(ProfileActions.getAllProfiles,(state) => {return{
  ...state,
  isLoading: true,
}
}),
  on(ProfileActions.getAllProfilesSuccess,(state,{profiles}) => {return {
    ...state,
    profiles: profiles,
    isLoading: false,
  }
  }),
  on(ProfileActions.getAllProfilesFailure,(state,{error}) => {return {
    ...state,
    error: error,
    isLoading: false,
  }
  }),
)
