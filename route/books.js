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

module.exports = router