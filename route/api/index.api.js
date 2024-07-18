const router = require('express').Router();

const authorsRouter = require('./author.api')
router.use('/authors',authorsRouter)

module.exports = router;