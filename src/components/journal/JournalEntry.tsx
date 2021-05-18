import React from 'react'
import moment from "moment";
import { useDispatch } from 'react-redux'
import { activeNote } from '../../actions/notes';

export const JournalEntry = ({ title, body, url, id, date }) => {
  const dispatch = useDispatch()
  const noteDate = moment(date)

  const note = { title, body, url, date }

  const handleActiveNote = () => {
    dispatch(activeNote(id, note))
  }

  return (
    <div className='journal__entry pointer' onClick={handleActiveNote}>
      {
        url &&
        (<div
          className="journal__entry-picture"
          style={
            {
              backgroundColor: 'cover',
              backgroundImage: `url(${url})`
            }}>
        </div>)
      }
      <div className="journal__entry-body">
        <p className='journal__entry-title'>{title}</p>
        <p className='journal__entry-content'>
          {body}
        </p>
      </div>
      <div className="journal__entry-date-box">
        <span>{noteDate.format('dddd')}</span>
        <h4>{noteDate.format('DD')}</h4>
      </div>
    </div>
  )
}
