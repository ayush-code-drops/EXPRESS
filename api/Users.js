const express = require("express");
const users = require("./user");
const uuid=require('uuid')
const router=express.Router()


router.get('/', (req, res) => {
   res.status(200).json(users)
    console.log(req.query);
})
router.get('/:userId', (req, res) => {
   // console.log(res)
    const user = users.find(user => user.id === req.params.userId)
    if (!user) {
        res.status(404).send("User Not Found")
    }
    console.log(req.params)
    res.send(user)
  
    
})

router.post("/", (req, res) => {
    try {
        const { name, active } = req.body
        const user = {
            id:uuid.v4(),
            name,
            active
        }

        if (!name) {
            throw new Error("Name is Required!")
        }
        if (!active) {
            throw new Error("active is Required!")
        }
users.push(user)
    res.status(201).json(user)
    }
    catch(err) {
        res.status(400).send(`Invalid Request : ${err.toString()}`)
    }
})

module.exports=router