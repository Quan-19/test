import {Profile} from "../../Models/profile.model";

export interface ProfileState{
  profiles: Profile[],
  profile : Profile | null,
  isLoading: boolean,
  error: any,
}
