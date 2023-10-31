import { createPostComment, getPostComments } from "@actions/posts";
import formatDate from "@utils/formatDate";
import CommentForm from "../CommentForm";
import css from "./index.module.css";

export const dynamic = "force-dynamic";

export default async function Comments({ postId }) {
    const comments = await getPostComments(postId);

    return (
        <div className={css.comments}>
            <h3>Discussion</h3>
            <CommentForm action={createPostComment} postId={postId} />
            {comments.length === 0 && <p>No comments found</p>}
            {comments.map((comment) => (
                <div className={css.comment} key={comment._id}>
                    <div className={css.author}>{comment.author}</div>
                    <div className={css.createdAt}>{formatDate(comment.createdAt)}</div>
                    <div className={css.body}>{comment.body}</div>
                </div>
            ))}
        </div>
    );
}
