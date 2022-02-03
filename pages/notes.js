import { parseCookies } from 'nookies'
import { API_URL } from '../config';
import styles from '../styles/Notes.module.css'
import Addnote from '../components/Addnote';
import Note from '../components/Note';
import { useState } from 'react';
import { fetchNotes } from '../helpers/auth';

export default function Notes({ notes }) {
  const [allNotes, setAllNotes] = useState(notes.notes);
  
  // Generate all notes
  const genNotes = () => {
    let data = [];

    data = allNotes.map(note => <Note key={note._id} note={note} refresh={refresh} />);
    return data;
  }

  // Refresh notes
  const refresh = () => {
    setAllNotes([]);
    fetchNotes(parseCookies().token).then(res => setAllNotes(res.notes))
  };

  console.log(allNotes);
  return (
    <div className={styles.main}>
      All notes
      <button onClick={refresh}>
        Refresh
      </button>
      <div className='notes'>
        { allNotes.length === 0 ? 
          <div className='error'>Add notes... <i className="far fa-comment"></i></div> :
          genNotes()
          }
      </div>

      <Addnote refresh={refresh} />
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const token = parseCookies(ctx).token;

  const notes = await fetchNotes(token);

  return {
    props: {
      notes
    },
  };
}