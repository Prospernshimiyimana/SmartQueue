import { Server } from "socket.io";

export async function GET() {
  if (!(global as any).io) {
    console.log("🚀 Starting Socket.io server...");

    const io = new Server(3001, {
      cors: { origin: "*" },
    });

    (global as any).io = io;

    io.on("connection", (socket) => {
      console.log("✅ Client connected:", socket.id);
    });
  }

  return new Response("Socket server running");
}