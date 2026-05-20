import { PrismaClient } from "@prisma/client";
import Link from "next/link";

import VoteButtons from "@/app/components/VoteButtons";
import CommentBox from "@/app/components/CommentBox";
import Navbar from "@/app/components/Navbar";

const prisma = new PrismaClient();

export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

  const { id } = await params;

  const post = await prisma.post.findUnique({
    where: {
      id,
    },

    include: {
      community: true,
      comments: true,
      votes: true,
    },
  });

  if (!post) {

    return (

      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">

        Post not found 😢

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200">

      <Navbar />

      <div className="max-w-4xl mx-auto p-8">

        <Link
          href="/"
          className="text-orange-500 font-bold text-lg"
        >
          ← Back
        </Link>

        <div className="bg-white rounded-3xl shadow-2xl p-10 mt-6">

          <div className="flex items-center justify-between mb-6">

            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold">

              r/{post.community.name}

            </span>

            <VoteButtons postId= {post.id} />

          </div>

          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">

            {post.title}

          </h1>

          <p className="text-xl text-gray-600 leading-relaxed">

            {post.content}

          </p>

        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Comments 💬
          </h2>

          <div className="space-y-4">

            {post.comments.map((comment) => (

              <div
                key={comment.id}
                className="bg-gray-100 rounded-2xl p-4"
              >
                {comment.text}
              </div>

            ))}

          </div>

          <CommentBox postId= {post.id} />

        </div>

      </div>

    </div>
  );
}