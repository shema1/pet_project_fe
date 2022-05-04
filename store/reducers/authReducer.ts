import { AuthAction, AuthActionTypes, AuthState } from "../../types/auth";

const initState: AuthState = {
  isLogin: false,
  currentUser: null
}

export const authReducer = (state = initState, action: AuthAction): AuthState => {
  switch (action.type) {

    case AuthActionTypes.LOGIN:
      return {
        ...state,
        isLogin: true,
        currentUser: action.payload
      }
    case AuthActionTypes.LOGOUT:
      return { isLogin: false, currentUser: null }
    default:
      return state;
  }
}