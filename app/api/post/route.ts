import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const post = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        communityId: body.communityId,
      },
    });

    return NextResponse.json({
      message: "Post created successfully 🚀",
      post,
    });

  } catch (error) {
    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}