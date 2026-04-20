"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full border-b bg-white/70 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <h1 className="font-bold text-lg">SmartQueue</h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-6 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/display">Display</Link>
          <Link href="/admin">Admin</Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          {open ? "✖" : "☰"}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col gap-4 px-6 pb-4 text-gray-700"
        >
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/display" onClick={() => setOpen(false)}>
            Display
          </Link>

          <Link href="/admin" onClick={() => setOpen(false)}>
            Admin
          </Link>
        </motion.div>
      )}

    </motion.nav>
  );
}