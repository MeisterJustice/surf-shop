import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const postSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [ String ],
    location: String,
    lat: Number,
    lng: Number,
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ]
});

const post = mongoose.model("Post", postSchema);
export default post;