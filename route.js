const express = require('express')
const router = express.Router();

const blogController = require('./Blog/blogController')

router.post('/addblog',blogController.newBlog)
router.post('/viewblog',blogController.viewBlog)
router.post('/individualBlog/:id',blogController.individualBlog)
router.post('/individualBlog/:id',blogController.individualBlog)
router.post('/deleteBlog/:id',blogController.deleteBlog)
router.post('/editBlog/:id',blogController.editBlog)

module.exports = router