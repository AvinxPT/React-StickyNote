const db = require('../services/db');


//get single user
function getUser (username) {
    const userInfo = db.getUser('SELECT * from users where username=@username;',{username},[]);
    console.log(userInfo);

    let message = "Error getting User";
    if (userInfo.changes){
        message = "User Retrieved";
    }
    return userInfo;
}

//create user
function createUser(userObj){
    const {name, username, password} = userObj;
    const postingUser = db.newUser('INSERT INTO users (name, username, password) VALUES (@name, @username, @password)', {name,username,password});

    let message = 'Error creating new User';
    if(postingUser.changes){
        message = 'User created successfully';
    }
    return {message};
}

module.exports = {
    getUser,
    createUser
}