"use client";

import { useEffect, useState } from "react";

export default function CreatePostPage() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [communities, setCommunities] = useState<any[]>([]);
  const [communityId, setCommunityId] = useState("");

  useEffect(() => {

    async function fetchCommunities() {

      const res = await fetch("/api/community");

      const data = await res.json();

      setCommunities(data);
    }

    fetchCommunities();

  }, []);

  async function createPost() {

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

    alert("Post Created 🚀");

    console.log(data);
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 flex items-center justify-center p-8">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-2xl">

        <h1 className="text-5xl font-extrabold text-orange-500 mb-8">

          Create Post 🚀

        </h1>

        <input
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 rounded-2xl border mb-5 outline-none"
        />

        <textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 rounded-2xl border mb-5 outline-none h-40"
        />

        <select
          value={communityId}
          onChange={(e) => setCommunityId(e.target.value)}
          className="w-full p-4 rounded-2xl border mb-6 outline-none"
        >

          <option value="">
            Select Community
          </option>

          {communities.map((community) => (

            <option
              key={community.id}
              value={community.id}
            >
              {community.name}
            </option>

          ))}

        </select>

        <button
          onClick={createPost}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold text-xl transition"
        >
          Create Post
        </button>

      </div>

    </div>
  );
}