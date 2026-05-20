import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const vote = await prisma.vote.create({
      data: {
        value: body.value,
        postId: body.postId,
      },
    });

    return NextResponse.json({
      success: true,
      vote,
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