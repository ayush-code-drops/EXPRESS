const express = require("express");
const app = express();
const port = 5000;
const userRouter=require('./api/Users');
const { urlencoded } = require("express");
const myLogger = require("./middlewares/myLogger");


app.use(myLogger)
 app.use(express.json())
app.use('/users', userRouter)
app.use(express.urlencoded({entended:true}))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log("listening to port");
})



