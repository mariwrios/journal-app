import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { startSaveNote, startUploading } from '../../actions/notes';
import moment from "moment";

const NoteAppBar = () => {
  const dispatch = useDispatch()
  const { active } = useSelector(state => state.notes)



  const today = new Date().getTime()



  const handleSave = () => {
    dispatch(startSaveNote(active))
  }

  const handlePictureClick = () => {
    document.querySelector('#fileSelector').click();
  }


  const handleFileChange = (e: React.SyntheticEvent) => {
    const file = e.target.files[0]
    if (file) {
      dispatch(startUploading(file))
    }
  }


  return (
    <div className='notes__appbar'>
      <span> {moment(today).format('dddd')}</span>
      <input type='file' name='file' style={{ display: 'none' }} onChange={handleFileChange} id='fileSelector' />

      <div>
        <button className='btn' onClick={handlePictureClick}> Picture</button>
        <button className='btn' onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default NoteAppBar
