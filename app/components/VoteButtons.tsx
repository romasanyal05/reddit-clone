"use client";

import { useState } from "react";

export default function VoteButtons({
  postId,
}: {
  postId: string;
}) {

  const [votes, setVotes] = useState(0);

  async function vote(value: number) {

    setVotes((prev) => prev + value);

    await fetch("/api/vote", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        value,
        postId,
      }),
    });
  }

  return (
    <div className="flex items-center gap-3">

      <button
        onClick={() => vote(1)}
        className="bg-orange-500 text-white px-3 py-2 rounded-lg"
      >
        ⬆
      </button>

      <span className="font-bold text-xl">
        {votes}
      </span>

      <button
        onClick={() => vote(-1)}
        className="bg-black text-white px-3 py-2 rounded-lg"
      >
        ⬇
      </button>

    </div>
  );
}