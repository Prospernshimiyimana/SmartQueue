import { prisma } from "../../../lib/prisma";

export async function POST(req: Request) {
  const { id } = await req.json();

  const ticket = await prisma.ticket.update({
    where: { id },
    data: { status: "done" },
  });

  return Response.json(ticket);
}