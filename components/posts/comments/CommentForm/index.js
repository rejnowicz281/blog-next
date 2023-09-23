"use client";

import InputErrors from "@components/shared/InputErrors";
import SubmitButton from "@components/shared/SubmitButton";
import { useState } from "react";
import css from "./index.module.css";

export default function CommentForm({ action, postId }) {
    const [errors, setErrors] = useState({});

    async function handleAction(data) {
        const res = await action(postId, data);

        if (!res.success) setErrors(res.errors);
    }

    return (
        <form action={handleAction}>
            <div className={css.field}>
                <label htmlFor="author">Author</label>
                <input className={css["author-input"]} type="text" id="author" name="author" />
                {errors?.author && <InputErrors errors={errors.author} className={css.error} />}
            </div>
            <div className={css.field}>
                <label htmlFor="body">Body</label>
                <textarea className={css["body-input"]} id="body" name="body" />
                {errors?.body && <InputErrors errors={errors.body} className={css.error} />}
            </div>
            <SubmitButton className={css.submit} submitContent="Leave a comment" submittingContent="Submitting..." />
        </form>
    );
}
