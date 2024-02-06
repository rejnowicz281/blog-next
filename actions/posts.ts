"use server";

import Comment from "@/models/comment";
import Post from "@/models/post";
import { connectToDB } from "@/utils/database";
import formatValidationError from "@/utils/format-validation-error";
import { Error } from "mongoose";
import { revalidatePath } from "next/cache";

export async function getPosts() {
    await connectToDB();

    const posts = await Post.find({
        status: "Public",
    })
        .sort({ createdAt: -1 })
        .select("title");

    return posts;
}

export async function getPost(id: string) {
    await connectToDB();

    const [post, comments] = await Promise.all([
        Post.findOne({
            _id: id,
            status: "Public",
        }).select("-status"),
        Comment.find({ post: id }).sort({
            createdAt: -1,
        }),
    ]);

    const data = { ...post._doc, comments };

    return data;
}

export async function createPostComment(formData: FormData) {
    await connectToDB();

    const author = formData.get("author");
    const body = formData.get("body");
    const postId = formData.get("post_id");

    const comment = new Comment({
        author,
        body,
        post: postId,
    });

    try {
        await comment.save();

        revalidatePath(`posts/${postId}`);

        const data = {
            action: "createPostComment",
            success: true,
        };
        console.log(data);
        return data;
    } catch (err: any) {
        if (!(err instanceof Error.ValidationError)) return err.message;

        const validationError = formatValidationError(err);
        const data = {
            action: "createComment",
            success: false,
            errors: validationError,
        };
        console.error(data);
        return data;
    }
}
