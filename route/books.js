const express = require('express');
const router = express.Router();
const booksDal = require('../services/books.dal')

router.get('/',async(req,res)=>{
    try {
        let books = await booksDal.getBooks();
        if(DEBUG) console.table(books);
        res.render('books',{books})
    } catch {
        res.render('503')
    }
})

router.post('/',async(req,res)=>{
    if(DEBUG) console.log("we be posting in books");
    try {
        await booksDal.addBooks(req.body.title, req.body.desc)
        if(DEBUG) console.log("done add in books");
        res.redirect('/books')
    } catch {
        res.render('503')
    }
})

router.get('/:id/replace',async (req,res)=>{
    if(DEBUG)console.log("we be replaceing in books")
    res.render('putBook.ejs',{title: req.query.title, desc: req.query.desc, theId: req.params.id})
})

router.get('/:id/edit',async (req,res)=>{
    if(DEBUG)console.log("we be editing in books")
    res.render('patchBook.ejs',{title: req.query.title, desc: req.query.desc, theId: req.params.id})
})

router.get('/:id/delete',async (req,res)=>{
    if(DEBUG)console.log("we be deleting in books")
    res.render('deleteBook.ejs',{title: req.query.title, desc: req.query.desc, theId: req.params.id})
})

router.put('/:id',async(req,res)=>{
    if(DEBUG)console.log("this is put in books");
    try {
        await booksDal.putBooks(req.params.id,req.body.title, req.body.desc)
        res.redirect('/books')
    } catch{
        res.render('503')
    }
})


router.patch('/:id',async(req,res)=>{
    if(DEBUG)console.log("this is patch in books");
    try {
        await booksDal.patchBooks(req.params.id,req.body.title, req.body.desc)
        res.redirect('/books')
    } catch{
        res.render('503')
    }
})

router.delete('/:id',async(req,res)=>{
    if(DEBUG)console.log("this is del in books");
    try {
        await booksDal.delBooks(req.params.id)
        res.redirect('/books')
    } catch{
        res.render('503')
    }
})


module.exports = router