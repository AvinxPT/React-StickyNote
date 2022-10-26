const express = require('express')
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const notesRouter = require('./routes/notes');
const userRouter = require('./routes/user');


//Checking connectivity
app.get("/", (req, res) =>{
    console.log("root directory requested.")
    res.send("Test");
})


//routes
app.use('/notes', notesRouter);
app.use('/user', userRouter);

//listening on port 5500
app.listen(5500 , () => {
    console.log("App listening at http://localhost:5500")
})