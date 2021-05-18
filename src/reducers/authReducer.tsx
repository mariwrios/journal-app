import { AuthAction } from '../actions/actionsTypes';



type AuthState = { uid: string, name: string } | {}


export const authReducer = (state: AuthState = {}, action: AuthAction): AuthState => {

  switch (action.type) {
    case "[Auth] Login":
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }
    case "[Auth] Logout":
      return {}

    default:
      return state
  }
}