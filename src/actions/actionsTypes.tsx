
/*----Tipo de actions del AuthReducer---*/

export type AuthAction =
  | { type: "[Auth] Logout" }
  | { type: "[Auth] Login", payload: LoginPayload }


export type LoginPayload =
  | { uid: string, displayName: string }


/*----Tipo de actions del UiReducer----*/

export type UiAction =
  | { type: "[UI] Remove Error" }
  | { type: "[UI] Start loading" }
  | { type: "[UI] finish loading" }
  | { type: "[UI] set Error", payload: UiPayload }


export type UiPayload =
  | { loading: boolean, msgError: null | string }


/*----Tipo de actions del NotesReducer----*/

export type NotesAction =
  | { type: "[Notes] New note", payload: NotePayload }
  | { type: "[Notes] Load notes", payload: NotePayload }
  | { type: "[Notes] Update note", payload: NotePayload }
  | { type: "[Notes] Delete note", payload: NotePayload }
  | { type: "[Notes] Logout cleaning" }
  | { type: "[Notes] Set active note", payload: NotePayload }
  | { type: "[Notes] Update image url", payload: NotePayload }


export type NotePayload =
  | Array<object>
  | { id: string }
  | { id: string, note: object }
  | { title: string, body: string, date: number }
  | { id: string, title: string, body: string, date: number }
  | { title: string, body: string, imageUrl: string, date: number }
  | { id: string, title: string, body: string, imageUrl: string, date: number }







