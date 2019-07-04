import express from 'express';
const router = express.Router();
import {
    getPosts,
    newPost,
    createPost,
    showPost,
    editPost,
    updatePost,
    deletePost
} from '../controllers/posts';

/* GET home page. */
router.get('/', getPosts);
router.get('/new', newPost);
router.post('/', createPost);
router.get('/:id', showPost);
router.get('/:id/edit', editPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);


export default router;
