const { Schema, models, model } = require("mongoose");

const commentSchema = new Schema(
    {
        author: {
            type: String,
            required: [true, "Please type in your name"],
            maxlength: 100,
        },
        body: {
            type: String,
            required: [true, "Text is required"],
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

const Comment = models.Comment || model("Comment", commentSchema);

module.exports = Comment;
