

export interface AuthState {
  isLogin: boolean
}

export enum AuthActionTypes {
  LOGIN = "LOGIN"
}

interface LoginAction {
  type: AuthActionTypes.LOGIN
}

export type AuthAction = LoginAction
