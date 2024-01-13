"use client";

import { createPostComment } from "@actions/posts";
import InputErrors from "@components/general/InputErrors";
import SubmitButton from "@components/general/SubmitButton";
import { useState } from "react";

export default function CommentForm({ postId }) {
    const [errors, setErrors] = useState({});

    async function handleAction(formData) {
        const res = await createPostComment(formData);

        if (!res.success) setErrors(res.errors);
    }

    return (
        <form action={handleAction}>
            <input type="hidden" name="post_id" value={postId} />
            <div className="my-5">
                <label className="font-bold" htmlFor="author">
                    Author
                </label>
                <input className="w-full d-block p-3 my-3 text-black" type="text" id="author" name="author" />
                {errors?.author && <InputErrors errors={errors.author} className="text-sm text-red-400 font-bold" />}
            </div>
            <div className="my-5">
                <label className="font-bold" htmlFor="body">
                    Body
                </label>
                <textarea className="w-full d-block p-3 my-3 text-black" id="body" name="body" />
                {errors?.body && <InputErrors errors={errors.body} className="text-sm text-red-400 font-bold" />}
            </div>
            <SubmitButton
                className="w-full p-4 cursor-pointer bg-slate-200 hover:bg-slate-300 disabled:bg-slate-300 text-slate-800 font-bold"
                content="Leave a comment"
                loading="Submitting..."
            />
        </form>
    );
}
