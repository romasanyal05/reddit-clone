import Link from "next/link";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function HomePage() {

  const posts = await prisma.post.findMany({
    include: {
      community: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 p-8">

      <div className="max-w-5xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <h1 className="text-5xl font-extrabold text-orange-500">
            Reddit Clone 🚀
          </h1>

          <div className="flex gap-4">

            <Link
              href="/create-community"
              className="bg-orange-500 text-white px-5 py-3 rounded-xl"
            >
              Create Community
            </Link>

            <Link
              href="/create-post"
              className="bg-black text-white px-5 py-3 rounded-xl"
            >
              Create Post
            </Link>

          </div>

        </div>

        <div className="space-y-6">

          {posts.map((post) => (

            <Link
              key={post.id}
              href={`/post/${post.id}`}
            >

              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:scale-[1.01] transition-all cursor-pointer">

                <div className="mb-3">

                  <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-bold">

                    r/{post.community.name}

                  </span>

                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-800">

                  {post.title}

                </h2>

                <p className="text-gray-600 text-lg">

                  {post.content}

                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </div>
  );
}