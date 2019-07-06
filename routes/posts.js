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
import {
    errorHandler
  } from '../middleware';

/* GET home page. */
router.get('/', errorHandler(getPosts));
router.get('/new', errorHandler(newPost));
router.post('/', errorHandler(createPost));
router.get('/:id', errorHandler(showPost));
router.get('/:id/edit', errorHandler(editPost));
router.put('/:id', errorHandler(updatePost));
router.delete('/:id', errorHandler(deletePost));


export default router;
