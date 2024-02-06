import { Schema, model, models } from "mongoose";

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

export type PostDocument = {
    _id: string;
    title: string;
    body: string;
    status: "Draft" | "Public";
    createdAt: string;
};

const Post = models.Post || model("Post", postSchema);

export default Post;
