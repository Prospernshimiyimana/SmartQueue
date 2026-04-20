"use client";

import { useState } from "react";

export default function TicketButton() {
  const [ticket, setTicket] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  const createTicket = async () => {
    setLoading(true);

    const res = await fetch("/api/tickets", {
      method: "POST",
    });

    const data = await res.json();
    setTicket(data.number);

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-4">

      <button
        onClick={createTicket}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
      >
        {loading ? "Loading..." : "Get Ticket"}
      </button>

      {ticket && (
        <p className="text-green-600 font-bold">
          Your Ticket: #{ticket}
        </p>
      )}

    </div>
  );
}