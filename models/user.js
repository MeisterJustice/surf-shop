import mongoose from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: String,
    image: String,
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
});

userSchema.plugin(passportLocalMongoose);
const user = mongoose.model("User", userSchema);
export default user;