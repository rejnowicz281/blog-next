import formatDate from "@utils/formatDate";
import CommentForm from "../CommentForm";

export default async function Comments({ comments = [], postId }) {
    return (
        <>
            <h3 className="text-2xl font-bold">Discussion</h3>
            <CommentForm postId={postId} />
            <div className="mt-7">
                {comments.length === 0 && <p>No comments found</p>}
                <div className="flex flex-col gap-7">
                    {comments.map((comment) => (
                        <div key={comment._id}>
                            <div className="font-bold underline">{comment.author}</div>
                            <div className="text-xs">{formatDate(comment.createdAt)}</div>
                            <div className="text-lg">{comment.body}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
