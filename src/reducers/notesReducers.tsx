import { NotesAction, NotePayload } from "../actions/actionsTypes"



interface notasState {
  notes: Array<string | number>,
  active: null | NotePayload
}


const initialState: notasState = {
  notes: [],
  active: null
}


export const notesReducers = (state: notasState = initialState, action: NotesAction) => {
  switch (action.type) {
    case "[Notes] Set active note":
      return {
        ...state,
        active: {
          ...action.payload
        },
        notes: state.notes
      }

    case "[Notes] Load notes":
      return {
        ...state,
        notes: [...action.payload]
      }
    case "[Notes] Update note":
      return {
        ...state,
        notes: state.notes.map(note => note.id === action.payload.id ? action.payload.note : note)
      }
    case "[Notes] Delete note":
      return {
        ...state,
        active: null,
        notes: state.notes.filter(note => note.id !== action.payload)

      }
    case "[Notes] Logout cleaning":
      return {
        ...state,
        notes: [],
        active: null
      }
    case "[Notes] New note":
      return {
        ...state,
        notes: [action.payload, ...state.notes]
      }

    default:
      return state
  }
}
