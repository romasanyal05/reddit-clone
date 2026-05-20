"use client";

import { useState } from "react";

export default function CommentBox({
  postId,
}: {
  postId: string;
}) {

  const [text, setText] = useState("");

  async function addComment() {

    if (!text) return;

    const response = await fetch("/api/comment", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        text,
        postId,
      }),
    });

    console.log(await response.json());

    setText("");

    location.reload();
  }

  return (

    <div className="mt-6">

      <textarea
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-4 border rounded-2xl outline-none"
      />

      <button
        onClick={addComment}
        className="mt-4 bg-orange-500 text-white px-6 py-3 rounded-2xl font-bold"
      >
        Post Comment 🚀
      </button>

    </div>
  );
}