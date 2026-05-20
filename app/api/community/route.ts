import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const community = await prisma.community.create({
      data: {
        name: body.name,
      },
    });

    return NextResponse.json({
      message: "Community created successfully 🚀",
      community,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}