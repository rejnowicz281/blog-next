import { getPosts } from "@actions/posts";
import Link from "next/link";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div className="m-24">
            {posts.length === 0 && <p>No posts found</p>}
            {posts.map((post) => (
                <Link
                    className="font-bold text-slate-200 hover:text-white block no-underline py-5 border-b border-solid border-neutral-700"
                    href={`/posts/${post._id}`}
                    key={post._id}
                >
                    <h2 className="text-6xl">{post.title}</h2>
                </Link>
            ))}
        </div>
    );
}
