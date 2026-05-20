import Link from "next/link";

export default function Navbar() {

  return (

    <div className="bg-white shadow-lg px-8 py-5 flex items-center justify-between rounded-b-3xl">

      <Link
        href="/"
        className="text-4xl font-extrabold text-orange-500"
      >
        Reddit Clone 🚀
      </Link>

      <div className="flex items-center gap-4">

        <Link
          href="/create-community"
          className="bg-orange-500 text-white px-5 py-3 rounded-2xl font-bold"
        >
          Create Community
        </Link>

        <Link
          href="/create-post"
          className="bg-black text-white px-5 py-3 rounded-2xl font-bold"
        >
          Create Post
        </Link>

        <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl">

          N

        </div>

      </div>

    </div>
  );
}