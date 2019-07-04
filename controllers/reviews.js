import mongoose from 'mongoose';


// @ Description
// @ Route
// @ Access Control
export const getReviews = async (req, res, next) => {
    res.send("Reviews index");
}

// @ Description
// @ Route
// @ Access Control
export const createReview = async (req, res, next) => {
    res.send("Reviews create");
}

// @ Description
// @ Route
// @ Access Control
export const showReview = async (req, res, next) => {
    res.send("Reviews show");
}

// @ Description
// @ Route
// @ Access Control
export const updateReview = async (req, res, next) => {
    res.send("Reviews update");
}

// @ Description
// @ Route
// @ Access Control
export const deleteReview = async (req, res, next) => {
    res.send("Reviews delete");
}