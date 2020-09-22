const Post = require('../models/postSchema');
const createError = require('http-errors');
const { create } = require('../models/postSchema');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ success: true, posts });
  }
  catch(err) {
    next(err);
  }
};

exports.postPost = async (req, res, next) => {
  try {
    const post = new Post(req.body);
    post.save();
    res.json({ success: true, post });
  }
  catch(err) {
    next(err);
  }
};

exports.putPost = async (req, res, next) => {
  const { id } = req.params;

  try {
    const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPost) throw createError(404);
    res.json({ success: true, updatedPost });
  }
  catch(err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {  
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) throw createError(404);
    res.json({ success: true });
  }
  catch(err) {
    next(err);
  }
};