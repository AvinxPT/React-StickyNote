const db = require('../services/db');

function getNotes (){
    try{
        const notes = db.getAll(`SELECT * FROM notes WHERE disabled = 0`, []);
        console.log("All notes provided.");
        return notes;
    } catch (err) {
        console.log("error on query", err.message);
    }
}

function createNote(noteObj) {
    const {title, content} = noteObj;
    const posting = db.newNote('INSERT INTO notes (title, content) VALUES (@title, @content)', {title, content});

    let result = 'Error in creating new note';
    if (posting.changes) {
         result = db.getOne(`SELECT * FROM notes WHERE title=@title and content=@content`, {title, content});
    }
    return {result};
}

function deleteNote(id) {
    const disabled = db.deleteNote('DELETE FROM notes where id=@id',{id});

    let message = "Error deleting note";
    if (disabled.changes) {
        message = 'Note successfully deleted';
    }
    return {message};
}


module.exports = {
    getNotes,
    createNote,
    deleteNote
}