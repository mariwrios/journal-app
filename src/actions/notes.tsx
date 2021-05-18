import Swal from 'sweetalert2'

import { db } from "../firebase/firebase-config";
import { NotesAction, NotePayload } from "./actionsTypes";
import { loadNotes } from "../helpers/loadNotes";
import { fileUpload } from '../helpers/fileUpload';


//react-journal


export const starNewNote = () => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }

    const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
    dispatch(activeNote(doc.id, newNote))
    dispatch(addNewNote(doc.id, newNote))
  }
}

export const activeNote = (id: string, note: NotePayload): NotesAction => ({
  type: "[Notes] Set active note",
  payload: {
    id: id,
    ...note
  }

})

export const addNewNote = (id: string, note: NotePayload): NotesAction => ({
  type: "[Notes] New note",
  payload: {
    id, ...note
  }
})

export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes))
  }
}

export const setNotes = (notes: NotePayload): NotesAction => ({
  type: "[Notes] Load notes",
  payload: notes
})

export const startSaveNote = (note) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth

    if (!note.url) {
      delete note.url
    }

    const noteToFirestore = { ...note }
    delete noteToFirestore.id

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)
    dispatch(refreshNote(note.id, note))
    Swal.fire('Saved', note.title, 'success')
  }
}

export const refreshNote = (id: string, note: NotePayload): NotesAction => ({
  type: "[Notes] Update note",
  payload: {
    id,
    note: {
      id,
      ...note
    }
  }
})

export const startUploading = (file: string) => {
  return async (dispatch, getState) => {
    const { active: activeNote } = getState().notes
    Swal.fire({
      title: 'Uploading. . .',
      text: 'Please wait...',
      showConfirmButton: false,
      onBeforeOpen: () => {
        Swal.showLoading()
      }
    })


    const fileUrl = await fileUpload(file);

    activeNote.url = fileUrl
    dispatch(startSaveNote(activeNote))

    Swal.close()
  }

}


export const starDeleting = (id: NotePayload) => {
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    await db.doc(`${uid}/journal/notes/${id}`).delete();
    dispatch(deleteNote(id));
  }
}

export const deleteNote = (id: NotePayload): NotesAction => ({
  type: "[Notes] Delete note",
  payload: id
})

export const cleaningNotesLogout = (): NotesAction => ({
  type: "[Notes] Logout cleaning"

})