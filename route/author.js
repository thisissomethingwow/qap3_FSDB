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

router.get('/:id/replace',async (req,res)=>{
    if(DEBUG)console.log("we be replaceing")
    res.render('put.ejs',{fn: req.query.fn, ln: req.query.ln, theId: req.params.id})
})

router.get('/:id/edit',async (req,res)=>{
    if(DEBUG)console.log("we be editing")
    res.render('patch.ejs',{fn: req.query.fn, ln: req.query.ln, theId: req.params.id})
})

router.get('/:id/delete',async (req,res)=>{
    if(DEBUG)console.log("we be deleting")
    res.render('delete.ejs',{fn: req.query.fn, ln: req.query.ln, theId: req.params.id})
})



router.put('/:id',async(req,res)=>{
    if(DEBUG)console.log("this is put");
    try {
        await authorsDal.putAuthors(req.params.id,req.body.fn, req.body.ln)
        res.redirect('/authors/')
    } catch{
        res.render('503')
    }
})


router.patch('/:id',async(req,res)=>{
    if(DEBUG)console.log("this is patch");
    try {
        await authorsDal.patchAuthors(req.params.id,req.body.fn, req.body.ln)
        res.redirect('/authors/')
    } catch{
        res.render('503')
    }
})

router.delete('/:id',async(req,res)=>{
    if(DEBUG)console.log("this is del");
    try {
        await authorsDal.delAuthors(req.params.id)
        res.redirect('/authors/')
    } catch{
        res.render('503')
    }
})

module.exports = router