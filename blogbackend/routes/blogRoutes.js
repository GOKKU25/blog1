const express = require('express');
const router = express.Router();
const Blog = require('../models/blogData');
const jwt = require('jsonwebtoken');
router.use(express.json());

function verifytoken(req, res, next) {
  let token = req.headers.authorization?.split(' ')[1]; // Extract Bearer token
  if (!token) return res.status(401).json({ message: 'Unauthorized access' });

  try {
    let payload = jwt.verify(token, 'abcdefg');
    if (!payload) return res.status(401).json({ message: 'Unauthorized access' });
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
}

router.post('/blogs', verifytoken, async (req, res) => {
  try {
    const { title, description, imageUrl } = req.body;
    const newBlog = new Blog({ title, description, imageUrl });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create blog', error: error.message });
  }
});

router.get('/blogs', verifytoken, async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch blogs', error: error.message });
  }
});

router.get('/blogs/:id', verifytoken, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to fetch blog', error: error.message });
  }
});

module.exports = router;
