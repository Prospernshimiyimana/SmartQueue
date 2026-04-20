"use client";

import { useEffect, useState } from "react";

export default function DisplayPage() {
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const fetchCurrent = async () => {
      try {
        const res = await fetch("/api/current");
        const data = await res.json();

        console.log("📥 FETCHED:", data);

        setCurrent(data.current);
      } catch (err) {
        console.error("Error fetching current:", err);
      }
    };

    // fetch immediately
    fetchCurrent();

    // 🔁 repeat every 1 second
    const interval = setInterval(fetchCurrent, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400 text-xl tracking-widest mb-4">
          NOW SERVING
        </p>

        <h1 className="text-[140px] font-extrabold">
          {current}
        </h1>

        <p className="text-gray-500 mt-6">
          Please proceed to counter
        </p>
      </div>
    </main>
  );
}