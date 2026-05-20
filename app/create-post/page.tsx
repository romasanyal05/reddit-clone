"use client";

import { useState } from "react";

export default function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [communityId, setCommunityId] = useState("");

  const handleCreatePost = async () => {
    const res = await fetch("/api/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
        communityId,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Post Created Successfully 🚀");

      setTitle("");
      setContent("");
      setCommunityId("");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4 py-10">

      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl p-10">

        <div className="text-center mb-10">

          <h1 className="text-5xl font-extrabold text-orange-500">
            Create Post
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Share your thoughts with the community 🚀
          </p>

        </div>

        <div className="space-y-6">

          <input
            type="text"
            placeholder="Enter post title"
            value={title}
            className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-lg"
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder="Write your post content..."
            rows={6}
            value={content}
            className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-lg"
            onChange={(e) => setContent(e.target.value)}
          />

          <input
            type="text"
            placeholder="Enter community ID"
            value={communityId}
            className="w-full p-5 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all text-lg"
            onChange={(e) => setCommunityId(e.target.value)}
          />

          <button
            onClick={handleCreatePost}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-5 rounded-2xl font-bold text-xl shadow-lg transition-all duration-300"
          >
            Create Post
          </button>

        </div>

      </div>

    </div>
  );
}