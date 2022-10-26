const express = require('express');
const router = express.Router();
const notes = require('../services/notes');


//get all notes
router.get('/', function(req,res) {
    try{
        res.json(notes.getNotes());
    } catch(err) {
        console.error('Error while getting notes', err.message);
    }
})

//post new note
router.post('/', function (req, res) {
    try {
        console.log(req.body);
        res.json(notes.createNote(req.body));
    } catch (err) {
        console.error(`Error adding note `, err.message);
    }
})

//delete note
router.delete('/:id', function (req,res) {
    try {
        console.log(req.params.id);
        res.json(notes.deleteNote(req.params.id));
    } catch(err) {
        console.error(`Error disabling notes`, err.message);
    }
});


module.exports = router;