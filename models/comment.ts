import { Schema, model, models } from "mongoose";

const commentSchema = new Schema(
    {
        author: {
            type: String,
            required: [true, "Please type in your name"],
            maxlength: 100,
        },
        body: {
            type: String,
            required: [true, "Body is required"],
            maxlength: 10000,
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: "Post",
            required: true,
        },
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

export type CommentDocument = {
    _id: string;
    author: string;
    body: string;
    post: string;
    createdAt: string;
};

const Comment = models.Comment || model("Comment", commentSchema);

export default Comment;
