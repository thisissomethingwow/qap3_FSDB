const router = require('express').Router();

const authorsRouter = require('./author.api')
router.use('/authors',authorsRouter)

const booksRouter = require('./books.api')
router.use('/books',booksRouter)

module.exports = router;