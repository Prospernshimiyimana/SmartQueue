"use client";

import { motion } from "framer-motion";

const features = [
  {
    icon: "🎟️",
    title: "Digital Tickets",
    desc: "Instant queue numbers on mobile devices.",
  },
  {
    icon: "📺",
    title: "Live Display",
    desc: "Real-time screen updates for customers.",
  },
  {
    icon: "🧑‍💼",
    title: "Admin Control",
    desc: "Manage queues from a simple dashboard.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10 sm:mb-14"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Powerful Features
        </h2>

        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Everything you need to manage queues efficiently
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-white/70 backdrop-blur border rounded-3xl p-5 sm:p-6 shadow-sm
                       hover:shadow-xl transition-all duration-300"
          >
            {/* ICON */}
            <div className="text-3xl sm:text-4xl mb-3 group-hover:animate-pulse">
              {f.icon}
            </div>

            {/* TITLE */}
            <h3 className="text-lg sm:text-xl font-semibold">
              {f.title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 mt-2 text-sm sm:text-base leading-relaxed">
              {f.desc}
            </p>
          </motion.div>
        ))}

      </div>
    </section>
  );
}