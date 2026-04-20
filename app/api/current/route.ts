import { prisma } from "../../lib/prisma";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const counter = await prisma.counter.findFirst();

  return NextResponse.json({
    current: counter?.current || 1,
  });
}