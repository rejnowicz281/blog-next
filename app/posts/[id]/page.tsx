import { getPost } from "@/actions/posts";
import CommentsContainer from "@/components/comments/comments-container";
import formatDate from "@/utils/format-date";
import Link from "next/link";

export type PostPageProps = {
    params: {
        id: string;
    };
};

export default async function PostPage({ params: { id } }: PostPageProps) {
    const post = await getPost(id);

    return (
        <div className="max-w-2xl self-center my-14 mx-6 break-words">
            <Link className="text-blue-400 hover:text-blue-500 underline" href="/">
                Back to Posts
            </Link>
            <h2 className="my-7 text-4xl font-bold">{post.title}</h2>
            <div className="text-sm pb-4 text-slate-400 font-bold border-b border-solid border-neutral-700">
                {formatDate(post.createdAt)}
            </div>

            <div className="py-8 mb-8 border-b border-solid border-neutral-700">{post.body}</div>
            <CommentsContainer comments={post.comments} postId={id} />
        </div>
    );
}
