"use client";

import { createPostComment } from "@/actions/posts";
import InputErrors from "@/components/general/input-errors";
import SubmitButton from "@/components/general/submit-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { FormattedErrors } from "@/types/errors";
import { useState } from "react";

export type CommentFormProps = {
    postId: string;
};

export default function CommentForm({ postId }: CommentFormProps) {
    const [errors, setErrors] = useState<FormattedErrors>({});

    async function handleAction(formData: FormData) {
        const res = await createPostComment(formData);

        if (!res.success) setErrors(res.errors);
        else setErrors({});
    }

    return (
        <form action={handleAction}>
            <input type="hidden" name="post_id" value={postId} />
            <div className="my-5">
                <Label className="font-bold" htmlFor="author">
                    Author
                </Label>
                <Input className="mb-3 text-black" type="text" id="author" name="author" />
                {errors?.author && <InputErrors errors={errors.author} className="text-sm text-red-400 font-bold" />}
            </div>
            <div className="my-5">
                <Label className="font-bold" htmlFor="body">
                    Body
                </Label>
                <Textarea className="mb-3 text-black" id="body" name="body" />
                {errors?.body && <InputErrors errors={errors.body} className="text-sm text-red-400 font-bold" />}
            </div>
            <Button variant="outline" className="w-full font-bold p-6 text-black hover:bg-gray-300 text-lg" asChild>
                <SubmitButton content="Leave a comment" loading="Submitting..." />
            </Button>
        </form>
    );
}
