"use client";

import { useState } from "react";

export default function CreateCommunityPage() {
  const [name, setName] = useState("");

  const handleCreate = async () => {
    const res = await fetch("/api/community", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Community Created Successfully 🚀");
      setName("");
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl p-10">

        <div className="text-center mb-8">
          <h1 className="text-5xl font-extrabold text-orange-500">
            Create Community
          </h1>

          <p className="text-gray-500 mt-3 text-lg">
            Build your own subreddit 🚀
          </p>
        </div>

        <div className="space-y-5">

          <input
            type="text"
            placeholder="Enter community name"
            value={name}
            className="w-full p-4 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400 transition-all"
            onChange={(e) => setName(e.target.value)}
          />

          <button
            onClick={handleCreate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-2xl font-bold text-lg shadow-lg transition-all duration-300"
          >
            Create Community
          </button>

        </div>

      </div>
    </div>
  );
}