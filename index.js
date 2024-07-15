const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000


global.DEBUG = true;
app.set('view engine','ejs')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, })); 
app.use(methodOverride('_method')); 

const filmsRouter = require('./route/films')
app.use('/',filmsRouter)




app.listen(PORT,()=>{
    console.log(`app running ${PORT}`)
})