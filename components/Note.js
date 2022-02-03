import { parseCookies } from "nookies";
import { useState } from "react";
import { deleteNoteReq, updateNoteReq } from "../helpers/auth";


const Note = ({ note, refresh }) => {
    const [noteTxt, setNoteTxt] = useState(note.content ?? "");
    // console.log(note);
    const deleteNote = (noteId) => {
        deleteNoteReq(parseCookies().token, noteId).then(res => refresh());
        console.log("note deleted");
    };

    const updateNote = (noteId) => {
        updateNoteReq(parseCookies().token, noteId, noteTxt).then(res => refresh());
        console.log("note updated");
    }
    
    return (
      <div className='note'>
        <input 
          type='text' 
          className='note-a' 
          value={noteTxt} 
          onChange={(e) => setNoteTxt(e.target.value)}
          onBlur={() => updateNote(note._id)}
          />
        <i className="note-c fas fa-check-square" onClick={() => updateNote(note._id)}></i>
        <i className="note-b fas fa-times-circle" onClick={() => deleteNote(note._id)}></i>
      </div>
    )
}

export default Note;
