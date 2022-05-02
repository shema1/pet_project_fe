import { AuthAction, AuthState } from "../../types/auth";

const initState: AuthState = {
  isLogin: false
}

export const authReducer = (state = initState, action: AuthAction): AuthState => {
  switch (action.type) {
    default:
      return state;
  }
}