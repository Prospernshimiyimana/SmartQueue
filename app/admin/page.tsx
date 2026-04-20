"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

type Ticket = {
  id: string;
  number: number;
  status: string;
};

export default function AdminPage() {
  const router = useRouter();
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [socket, setSocket] = useState<unknown>(null);

  // 🔐 AUTH CHECK
  useEffect(() => {
    const isAdmin = localStorage.getItem("admin");
    if (!isAdmin) {
      router.push("/login");
    }
  }, [router]);

  // 📡 FETCH TICKETS
  const fetchTickets = async () => {
    const res = await fetch("/api/tickets");
    const data = await res.json();
    setTickets(data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchTickets();
  }, []);

  // ⚡ SOCKET SETUP (FIXED)
  useEffect(() => {
    // start socket server
    fetch("/api/socket");

    const s = io("http://localhost:3001");

    s.on("connect", () => {
      console.log("🟢 Admin connected to socket");
    });

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  // 🟦 SERVE FUNCTION (REAL-TIME)
  const serve = async (id: string) => {
    const res = await fetch("/api/tickets/serve", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const ticket = await res.json();

    console.log("📤 SENDING:", ticket);

    // ⚡ EMIT EVENT
    socket?.emit("ticket-updated", ticket);

    fetchTickets();
  };

  // 🟩 DONE FUNCTION (OPTIONAL)
  const done = async (id: string) => {
    await fetch("/api/tickets/done", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    fetchTickets();
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("admin");
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            Admin Dashboard
          </h1>

          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </button>
        </div>

        {/* TICKETS */}
        <div className="grid gap-4">

          {tickets.length === 0 && (
            <p className="text-gray-500 text-center">
              No tickets yet...
            </p>
          )}

          {tickets.map((t) => (
            <div
              key={t.id}
              className="bg-white border rounded-2xl p-4 flex justify-between items-center shadow-sm"
            >

              {/* LEFT */}
              <div>
                <p className="font-bold text-lg">
                  Ticket #{t.number}
                </p>

                <p
                  className={
                    t.status === "waiting"
                      ? "text-yellow-500"
                      : t.status === "serving"
                      ? "text-blue-500"
                      : "text-green-600"
                  }
                >
                  {t.status}
                </p>
              </div>

              {/* ACTIONS */}
              <div className="flex gap-2">

                <button
                  onClick={() => serve(t.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
                >
                  Serve
                </button>

                <button
                  onClick={() => done(t.id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl"
                >
                  Done
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}