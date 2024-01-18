import { User } from './../model/user.model';
import { isDevMode } from "@angular/core";
import {
  ActionReducerMap,
  createReducer,
  createSelector,
  MetaReducer,
  on,
} from "@ngrx/store";
import { AuthActions } from '../action-type';

export const authFeatureKey = "auth";

export interface AuthState {
  user:User
}

export const intialAuthState:AuthState={
  user:undefined
}

export const reducers: ActionReducerMap<AuthState> = {
  user: undefined,
  // router: routerReducer,
};

export const metaReducers: MetaReducer<AuthState>[] = isDevMode() ? [] : [];

export const authReducer = createReducer(
  intialAuthState,
  on(AuthActions.loginActions, (state,action)=>{
    return{
      user:action.user
    }
  }),
  on(AuthActions.logout,(state,action)=>{
    return {
      user:undefined
    }
  })
);
