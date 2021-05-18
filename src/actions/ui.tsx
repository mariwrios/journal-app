import Swal from 'sweetalert2'
import { UiAction } from './actionsTypes'



export const removeError = (): UiAction => ({
  type: "[UI] Remove Error"
})


export const startLoading = (): UiAction => ({
  type: "[UI] Start loading"
})


export const finishLoading = (): UiAction => ({
  type: "[UI] finish loading"
})



export const setError = (err: string) => {
  return (dispatch) => {
    msgError(err)

    Swal.fire('Error', err, 'error')

  }
}

export const msgError = (err: string): UiAction => ({
  type: "[UI] set Error",
  payload: { loading: false, msgError: err }
})