import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const comment = await prisma.comment.create({
      data: {
        text: body.text,
        postId: body.postId,
      },
    });

    return NextResponse.json({
      success: true,
     comment,
  });

  } catch (error) {

    console.log(error);
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