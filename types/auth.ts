import { IUser } from "./user"


export interface AuthState {
  isLogin: boolean,
  currentUser: IUser
}


export interface ILogin {
  email: string;
  password: string
}

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT"
}

interface LoginAction {
  type: AuthActionTypes.LOGIN
  payload: IUser
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

export type AuthAction = LoginAction | LogoutAction
