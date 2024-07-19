const express = require('express')
const methodOverride = require('method-override')
const app = express()
const PORT = 3000


global.DEBUG = true;
app.set('view engine','ejs')
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true, })); 
app.use(methodOverride('_method')); 
app.use(express.static(__dirname+'/public'))

app.get('/', (req, res) => {
    res.render('index.ejs');
});

const booksRouter = require('./route/books')
app.use('/books',booksRouter)

const authorRouter = require('./route/author')
app.use('/authors',authorRouter)


const apiRouter = require('./route/api/index.api')
app.use('/api',apiRouter)


app.listen(PORT,()=>{
    console.log(`app running ${PORT}`)
})