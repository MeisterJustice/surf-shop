import mongoose from 'mongoose';
import Post from '../models/post';


// @ Description
// @ Route
// @ Access Control
export const getPosts = async (req, res, next) => {
    let posts = await Post.find({});
    res.render('posts/index', {posts});
}

// @ Description
// @ Route
// @ Access Control
export const newPost = async (req, res, next) => {
    res.render("posts/new");
}

// @ Description
// @ Route
// @ Access Control
export const createPost = async (req, res, next) => {
    let newPost = await Post.create(req.body);
    res.redirect(`/posts/${newPost.id}`);
}

// @ Description
// @ Route
// @ Access Control
export const showPost = async (req, res, next) => {
    let post = await Post.findById(req.params.id);
    res.render("posts/show", {post});
}

// @ Description
// @ Route
// @ Access Control
export const editPost = async (req, res, next) => {
    let post = await Post.findById(req.params.id);
    res.render("posts/edit", {post});
}

// @ Description
// @ Route
// @ Access Control
export const updatePost = async (req, res, next) => {
    let update = await Post.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/posts/${update.id}`);
}

// @ Description
// @ Route
// @ Access Control
export const deletePost = async (req, res, next) => {
    let removePost = await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");
}