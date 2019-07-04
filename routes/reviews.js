import express from 'express';
const router = express.Router({mergeParams: true});
import {
    getReviews,
    createReview,
    showReview,
    updateReview,
    deleteReview
} from '../controllers/reviews';

router.get('/', getReviews);
router.post('/', createReview);
router.get('/:review_id', showReview);
router.put('/:review_id', updateReview);
router.delete('/:review_id', deleteReview);


export default router;
