import express from 'express';

export const register = express.Router()

register.post('/create', (req, res) => {
    const {username, checked, email, password} = req.body
    //query db with current email
    //set response for duplicate email
    //else start hashing pw with salt rounds
    //create account add into db
    res.json({username, checked, email, password})
})