import { prisma } from "../../lib/prisma";

// CREATE TICKET
export async function POST() {
  const last = await prisma.ticket.findFirst({
    orderBy: { number: "desc" },
  });

  const newNumber = last ? last.number + 1 : 1;

  const ticket = await prisma.ticket.create({
    data: {
      number: newNumber,
      status: "waiting",
    },
  });

  return Response.json(ticket);
}

// GET TICKETS
export async function GET() {
  const tickets = await prisma.ticket.findMany({
    orderBy: { createdAt: "asc" },
  });

  return Response.json(tickets);
}