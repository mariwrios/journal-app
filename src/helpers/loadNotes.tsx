import { db } from "../firebase/firebase-config"




export const loadNotes = async (uid: string) => {

  const notesSnap = await db.collection(`${uid}/journal/notes`).get();
  const notes: Array<object> = [];

  notesSnap.forEach(snapHijo => {

    notes.push({
      id: snapHijo.id,
      ...snapHijo.data()
    })
  })



  return notes;

}