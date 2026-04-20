import TicketButton from "../components/TicketButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-100 p-6">

      <div className="w-full max-w-xl bg-white/30 backdrop-blur-xl border shadow-xl rounded-3xl p-10 text-center">

        <h1 className="text-4xl font-bold tracking-tight">
          Digital Queue System
        </h1>

        <p className="text-gray-500 mt-3">
          Get your ticket instantly and avoid waiting in long lines.
        </p>

        <div className="mt-8">
          <TicketButton />
        </div>

        <div className="mt-6 text-xs text-gray-400">
          Powered by SmartQueue SaaS
        </div>

      </div>

    </main>
  );
}