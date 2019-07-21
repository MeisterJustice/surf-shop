import express from 'express';
const router = express.Router();
import multer from 'multer';
const upload = multer({'dest': 'uploads/'});
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
    asyncErrorHandler
  } from '../middleware';

/* GET home page. */
router.get('/', asyncErrorHandler(getPosts));
router.get('/new', newPost);
router.post('/', upload.array('images', 4), asyncErrorHandler(createPost));
router.get('/:id', asyncErrorHandler(showPost));
router.get('/:id/edit', asyncErrorHandler(editPost));
router.put('/:id', asyncErrorHandler(updatePost));
router.delete('/:id', asyncErrorHandler(deletePost));


export default router;
