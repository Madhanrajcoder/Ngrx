import { createAction, props } from "@ngrx/store";
import { User } from "./model/user.model";

export const loginActions = createAction(
  "[Login Page] User Login",
  props<{ user: User }>()
);

export const logout = createAction(
    "[Top Menu] Logout"
  );
