const express = require('express');
const router = express.Router();
const user = require('../services/user');

//get userInfo
router.get('/:username', function(req,res) {
    try{
        console.log(req.params.username);
        res.json(user.getUser(req.params.username));
    } catch(err) {
        console.error('Error getting user', err.message);
    }
})

//new User
router.post('/', function (req, res) {
    try{
        console.log(req.body);
        res.json(user.createUser(req.body));
    }catch(err){
        console.error('Error creating user ', err.message);
    }
});




module.exports = router;