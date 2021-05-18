import { AuthAction } from "../actions/actionsTypes"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { startLoading, finishLoading } from "./ui";
import Swal from 'sweetalert2'
import { cleaningNotesLogout } from "./notes";




export const starLoginEmailPassword = (email: string, password: string) => {
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName))
        dispatch(finishLoading())
      }).catch(e => {
        console.log(e)
        dispatch(finishLoading())
        Swal.fire('Error', e.message, 'error')
      })
  }
}



export const starRegisterWithEmailPasswordName = (email: string, password: string, name: string) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {

        await user.updateProfile({ displayName: name })

        dispatch(
          login(user.uid, user.displayName))

      }).catch(e => { console.log(e); Swal.fire('Error', e.message, 'error') })

  }
}




export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider).then(({ user }) => {
      dispatch(
        login(user.uid, user.displayName)
      )
    })
  }
}



export const login = (uid: string, displayName: string): AuthAction => ({

  type: "[Auth] Login",
  payload: {
    uid,
    displayName

  }
})


export const starLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()

    dispatch(logout())
    dispatch(cleaningNotesLogout())
  }
}

export const logout = (): AuthAction => ({
  type: "[Auth] Logout"
})

