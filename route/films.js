const express = require('express');
const router = express.Router();
const filmsDal = require('../services/films.dal')

router.get('/',async(req,res)=>{
    try {
        let Films = await filmsDal.getFilms();
        if(DEBUG) console.table(Films);
        res.render('films',{Films})
    } catch {
        res.render('503')
    }
})

module.exports = router