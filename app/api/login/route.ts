import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  const admin = await prisma.admin.findUnique({
    where: { email },
  });

  if (!admin || admin.password !== password) {
    return Response.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  return Response.json({
    message: "Login successful",
    adminId: admin.id,
  });
}