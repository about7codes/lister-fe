import { API_URL } from "../config";

// fetching notes from the server
export const fetchNotes = async (token) => {

    const response = await fetch(`${API_URL}/notes`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
    });

    const notes = await response.json();
    console.log("run fetchNotes");
    return notes;
};

// adding a note to the server
export const addNoteReq = async (token, note) => {

    const response = await fetch(`${API_URL}/notes/new`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'content': note })
    });

    const newNote = await response.json();
    console.log("run addNote");
    return newNote;
}

// deleting a note from the server
export const deleteNoteReq = async (token, noteId) => {
    console.log(token);
    const response = await fetch(`${API_URL}/notes/delete/${noteId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
    });

    const deletedNote = await response.json();
    console.log("run deleteNote");
    return deletedNote;
}

// updating a note on the server
export const updateNoteReq = async (token, noteId, note) => {
    console.log(token);
    const response = await fetch(`${API_URL}/notes/update/${noteId}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 'content': note })
    });

    const updatedNote = await response.json();
    console.log("run updateNote");
    return updatedNote;
}