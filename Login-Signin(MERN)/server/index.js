const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/credentials');

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/medicore-cred");

const userDetails = {
    email: null,
    password: null
}

app.post('/', (req, res) => {
    const {email, password} = req.body;
    userModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password){
                userDetails.email = user.email;
                userDetails.password = user.password;
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record Existed")
        }
    })
})

app.post('/register', (req, res) => {
    userModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))
})

app.get('/profile', (req, res) => {
    const {email} = userDetails;
    console.log("Email: " + email);
    userModel.findOne({email: email})
    .then(user => {
        if (user) {
            res.json(user);
        } else {
            res.json("User not found");
        }
    })
    .catch(err => console.log(err))
})

app.listen(3009, ()=>{
    console.log("Server is running");
})
