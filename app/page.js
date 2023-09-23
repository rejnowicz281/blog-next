import { getPosts } from "@actions/posts";
import Link from "next/link";
import css from "./page.module.css";

export const dynamic = "force-dynamic";

export default async function Home() {
    const posts = await getPosts();

    return (
        <div className={css.container}>
            {posts.length === 0 && <p>No posts found</p>}
            {posts.map((post) => (
                <Link className={css.link} href={`/posts/${post._id}`} key={post._id}>
                    <h2 className={css.title}>{post.title}</h2>
                </Link>
            ))}
        </div>
    );
}
