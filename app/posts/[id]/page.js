import { getPost, getPosts } from "@actions/posts";
import formatDate from "@utils/formatDate";
import Link from "next/link";
import css from "./page.module.css";

const LazyComments = dynamic(() => import("@components/posts/comments/Comments"));

export async function generateStaticParams() {
    const posts = await getPosts();

    return posts.map((post) => ({
        id: post.id,
    }));
}

export default async function PostPage({ params }) {
    const post = await getPost(params.id);

    return (
        <div className={css.container}>
            <Link className={css["back-link"]} href="/">
                Back to Posts
            </Link>
            <h2 className={css.title}>{post.title}</h2>
            <div className={css.createdAt}>{formatDate(post.createdAt)}</div>
            <hr />
            <div className={css.body}>{post.body}</div>
            <hr />
            <LazyComments postId={params.id} />
        </div>
    );
}
