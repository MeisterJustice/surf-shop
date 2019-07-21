import Post from '../models/post';
import cloudinary from 'cloudinary';
cloudinary.config({
    cloud_name: 'djzeufu4j',
    api_key: '924695718565452',
    api_secret: process.env.CLOUDINARY_SECRET
});


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
    req.body.post.images = []
    for(const file of req.files) {
        let image = await cloudinary.v2.uploader.upload(file.path);
        req.body.post.images.push({
            url: image.secure_url,
            public_id: image.public_id
        });
    }
    let newPost = await Post.create(req.body.post);
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
    let update = await Post.findByIdAndUpdate(req.params.id, req.body.post);
    res.redirect(`/posts/${update.id}`);
}

// @ Description
// @ Route
// @ Access Control
export const deletePost = async (req, res, next) => {
    let removePost = await Post.findByIdAndRemove(req.params.id);
    res.redirect("/");
}