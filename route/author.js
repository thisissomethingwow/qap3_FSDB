const express = require('express');
const router = express.Router();
const authorsDal = require('../services/authors.dal')

router.get('/',async(req,res)=>{
    try {
        let authors = await authorsDal.getAuthors();
        if(DEBUG) console.table(authors);
        res.render('authors',{authors})
    } catch {
        res.render('503')
    }
})

module.exports = router