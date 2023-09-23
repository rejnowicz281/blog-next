"use client";

import css from "./index.module.css";

export default function CommentForm({ action, postId }) {
    async function handleAction(data) {
        const res = await action(postId, data);

        console.log(res);
    }

    return (
        <form action={handleAction}>
            <div className={css.field}>
                <label htmlFor="author">Author</label>
                <input className={css["author-input"]} type="text" id="author" name="author" />
            </div>
            <div className={css.field}>
                <label htmlFor="body">Body</label>
                <textarea className={css["body-input"]} id="body" name="body" />
            </div>
            <button className={css.submit} type="submit">
                Leave a comment
            </button>
        </form>
    );
}
