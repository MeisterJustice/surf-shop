import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    body: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
});

const review = mongoose.model("Review", reviewSchema);
export default review;