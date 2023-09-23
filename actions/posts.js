import Comment from "@models/comment";
import Post from "@models/post";
import { connectToDB } from "@utils/database";
import { revalidatePath } from "next/cache";

export async function getPosts() {
    await connectToDB();

    const posts = await Post.find().sort({ createdAt: -1 }).select("title");

    return posts;
}

export async function getPost(id) {
    await connectToDB();

    const post = await Post.findById(id);

    return post;
}

export async function getPostComments(postId) {
    await connectToDB();

    const comments = await Comment.find({ post: postId }).sort({
        createdAt: -1,
    });

    return comments;
}

export async function createPostComment(postId, formData) {
    "use server";

    await connectToDB();

    const author = formData.get("author");
    const body = formData.get("body");

    const comment = new Comment({
        author,
        body,
        post: postId,
    });

    await comment.save();

    revalidatePath(`posts/${postId}`);

    const data = {
        action: "createPostComment",
        success: true,
    };

    return data;
}
