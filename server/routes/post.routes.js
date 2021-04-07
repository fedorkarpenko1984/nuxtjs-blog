const passport = require('passport')
const {Router} = require('express')
const controller = require('../controllers/post.controller')
const router = Router()

// Admin
// api/post/admin
router.post(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  controller.createPost
)

router.get(
  '/admin/',
  passport.authenticate('jwt', {session: false}),
  controller.getAllPosts
)

router.get(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  controller.getById
)

router.put(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  controller.updatePost
)

router.delete(
  '/admin/:id',
  passport.authenticate('jwt', {session: false}),
  controller.removePost
)
// Base
// api/post
router.get('/', controller.getAllPosts)
router.get('/:id', controller.getById)
router.put('/:id', addView)


module.exports = router
