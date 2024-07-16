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

router.post('/',async(req,res)=>{
    if(DEBUG) console.log("we be posting");
    try {
        await authorsDal.addAuthors(req.body.fn, req.body.ln)
        if(DEBUG) console.log("done add");
        res.redirect('/authors/')
    } catch {
        res.render('503')
    }
})


module.exports = router