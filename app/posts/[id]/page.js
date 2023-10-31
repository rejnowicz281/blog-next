import { getPost } from "@actions/posts";
import Comments from "@components/posts/comments/Comments";
import formatDate from "@utils/formatDate";
import Link from "next/link";
import css from "./page.module.css";

export const dynamic = "force-dynamic";

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
            <Comments comments={post.comments} postId={params.id} />
        </div>
    );
}
