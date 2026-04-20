import { prisma } from "../../lib/prisma";

export async function GET() {
  const counter = await prisma.counter.findFirst();

  return Response.json({
    current: counter?.current || 1,
  });
}