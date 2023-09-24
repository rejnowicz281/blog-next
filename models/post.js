const { Schema, models, model } = require("mongoose");

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            maxlength: 100,
        },
        body: {
            type: String,
            required: true,
            maxlength: 10000,
        },
        status: {
            type: String,
            enum: ["Draft", "Public"],
            default: "Draft",
        },
    },
    { timestamps: { createdAt: true, updatedAt: false } }
);

const Post = models.Post || model("Post", postSchema);

module.exports = Post;
