import next from "next";
import { createServer } from "http";
import { initSocket } from "./app/lib/socket";

const app = next({ dev: true });
const handler = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer(handler);

  const io = initSocket(server);

  // make socket globally accessible
  (global as any).io = io;

  server.listen(3000, () => {
    console.log("🚀 Server running on http://localhost:3000");
  });
});