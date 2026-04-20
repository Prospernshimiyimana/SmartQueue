import { prisma } from "../../lib/prisma";

export async function POST() {
  const current = await prisma.counter.findFirst();

  let updated;

  if (!current) {
    updated = await prisma.counter.create({
      data: { current: 1 },
    });
  } else {
    updated = await prisma.counter.update({
      where: { id: current.id },
      data: { current: current.current + 1 },
    });
  }

  return Response.json(updated);
}