import { IUser } from "./user"


export interface AuthState {
  isLogin: boolean,
  currentUser: IUser
}


export interface ILogin {
  email: string;
  password: string
}

export interface ISignIn {
  email: string;
  name: string;
  password: string
}

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  SIGNIN = "SIGNIN"
}

interface LoginAction {
  type: AuthActionTypes.LOGIN
  payload: IUser
}

interface SigninAction {
  type: AuthActionTypes.SIGNIN
  payload: IUser
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

export type AuthAction = LoginAction | LogoutAction | SigninAction
