import { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NoteAppBar from './NoteAppBar'
import { useForm } from '../hooks/useForm'
import { activeNote, starDeleting } from '../../actions/notes'

export const NoteScreem = () => {
  const dispatch = useDispatch()

  const { active: note } = useSelector(state => state.notes)
  const { value, handleInputChange, reset } = useForm(note)
  const { title, body, id } = value


  const activeId = useRef(id)

  useEffect(() => {

    if (note.id !== activeId.current) {
      reset(note);
      activeId.current = note.id
    }

  }, [note, reset, id])


  useEffect(() => {
    dispatch(activeNote(value.id, { ...value }))

  }, [value, dispatch])

  const handleDelete = () => {
    dispatch(starDeleting(id))
  }

  return (
    <div className='note__main-content'>
      <NoteAppBar />
      <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
      <div className="notes__content">
        <input
          type='text'
          name='title'
          placeholder='Some awesome title'
          className='notes__title-input'
          onChange={handleInputChange}
          value={title}
          autoComplete='off'
        />
        <textarea
          autoComplete='off'
          name='body'
          onChange={handleInputChange}
          value={body}
          placeholder='What happend today'
          className='notes__textarea'>
        </textarea>

        {
          note.url
          &&
          (<div className="notes__image">
            <img src={note.url} alt={title} />
          </div>)
        }
      </div>
    </div>
  )
}
