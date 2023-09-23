import Post from "@models/post";
import { connectToDB } from "@utils/database";

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
