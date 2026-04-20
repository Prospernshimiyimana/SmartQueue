import {prisma} from "../../../lib/prisma";

export async function POST(req: Request) {
  const { id } = await req.json();

  // 1. update ticket → serving
  const ticket = await prisma.ticket.update({
    where: { id },
    data: { status: "serving" },
  });

  // 2. update counter (THIS IS THE FIX 🔥)
  await prisma.counter.upsert({
    where: { id: "main" },
    update: {
      current: ticket.number,
    },
    create: {
      id: "main",
      current: ticket.number,
    },
  });

  return Response.json(ticket);
}