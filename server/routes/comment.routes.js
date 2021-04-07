const {Router} = require('express')
const controller = require('../controllers/comment.controller')
const router = Router()

// /api/comment
router.post('/', controller.create)

module.exports = router
