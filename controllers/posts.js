import mongoose from 'mongoose';


// @ Description
// @ Route
// @ Access Control
export const getPosts = async (req, res, next) => {
    res.send("posts index");
}

// @ Description
// @ Route
// @ Access Control
export const newPost = async (req, res, next) => {
    res.send("posts new");
}

// @ Description
// @ Route
// @ Access Control
export const createPost = async (req, res, next) => {
    res.send("posts create");
}

// @ Description
// @ Route
// @ Access Control
export const showPost = async (req, res, next) => {
    res.send("posts show");
}

// @ Description
// @ Route
// @ Access Control
export const editPost = async (req, res, next) => {
    res.send("posts edit");
}

// @ Description
// @ Route
// @ Access Control
export const updatePost = async (req, res, next) => {
    res.send("posts update");
}

// @ Description
// @ Route
// @ Access Control
export const deletePost = async (req, res, next) => {
    res.send("posts delete");
}