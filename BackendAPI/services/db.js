const sqlite = require('better-sqlite3');
const path = require('path');
const db = new sqlite(path.resolve('stickynotes.db'), {fileMustExist: true});

//get all
function getAll(sql,params){
    return db.prepare(sql).all(params);
}

//get1
function getOne(sql,params){
    return db.prepare(sql).get(params);
}

//post note
function newNote(sql, params) {
  return db.prepare(sql).run(params);
}

//change note disable field from 0 to 1 (to disable)
function deleteNote(sql, params) {
  return db.prepare(sql).run(params);
}


//get 1 element from database
function getUser(sql, params){
  return db.prepare(sql).get(params);
}

//create user in database
function newUser(sql, params){
  return db.prepare(sql).run(params);
}


module.exports= {
    getAll,
    getOne,
    newNote,
    deleteNote,
    getUser,
    newUser
}