import { UiAction } from '../actions/actionsTypes'


type UiState = {
  loading: boolean,
  msgError: null | string
}

const initialState: UiState = {
  loading: false,
  msgError: null
}

export const uiReducer = (state: UiState = initialState, action: UiAction): UiState => {

  switch (action.type) {
    case "[UI] set Error":
      return {
        ...state,
        msgError: action.payload.msgError
      }

    case "[UI] Remove Error":
      return {
        ...state,
        msgError: null
      }
    case "[UI] Start loading":
      return {
        ...state,
        loading: true,

      }
    case "[UI] finish loading":
      return {
        ...state,
        loading: false,
      }

    default:
      return state
  }
}