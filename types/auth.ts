import { IUser } from "./user"


export interface AuthState {
  isLogin: boolean,
  currentUser: IUser,
  access_token: string
}


export interface ILogin {
  email: string;
  password: string
}

export interface ISignUp {
  email: string;
  name: string;
  password: string
}

export enum AuthActionTypes {
  LOGIN = "LOGIN",
  LOGOUT = "LOGOUT",
  SIGNUP = "SIGNUP"
}

interface LoginAction {
  type: AuthActionTypes.LOGIN
  payload: string
}

interface SignupAction {
  type: AuthActionTypes.SIGNUP
  payload: IUser
}

interface LogoutAction {
  type: AuthActionTypes.LOGOUT
}

export type AuthAction = LoginAction | LogoutAction | SignupAction
