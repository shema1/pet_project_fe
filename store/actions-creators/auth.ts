import { Dispatch } from "react";
import axios from "axios";
import { AuthAction, AuthActionTypes, ILogin } from "../../types/auth";
import handleError from "../../services/handleError";



export const login = (params: ILogin, callback: () => void) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      const response = await axios.post('http://localhost:5000/auth/login', params)
      callback()
      return dispatch({ type: AuthActionTypes.LOGIN, payload: response.data })
    } catch (error) {
      handleError(error.message)
      console.log("error", error)
    }
  }
}

export const logout = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    try {
      return dispatch({ type: AuthActionTypes.LOGOUT })
    } catch (error) {
      console.log(error)
    }
  }
}