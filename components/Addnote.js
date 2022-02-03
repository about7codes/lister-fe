import { parseCookies } from "nookies";
import { addNoteReq } from "../helpers/auth";


const Addnote = ({ refresh }) => {
   
    const handleSubmit = (e) => {
      e.preventDefault();
      if(e.target.note.value.length === 0){
        console.log('Write something...')
      }else{
        const token = parseCookies().token;
        addNoteReq(token, e.target.note.value).then(res => refresh());
      }
      
      // Clear & Focus on input after submit event
      e.target.note.value = '';
      e.target.note.focus();
    }
    
    return (
      <form onSubmit={handleSubmit} className="form">
        <input type='text' 
          name='note' 
          placeholder='Enter note...'
          // autoFocus
          />
        <button type="submit"><i className="fas fa-plus"></i></button>
      </form>
    )
}

export default Addnote;