"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const items = [
  { label: "Active Users", value: 1200, icon: "👥" },
  { label: "Businesses", value: 50, icon: "🏢" },
  { label: "Satisfaction", value: 99, icon: "⭐", suffix: "%" },
];

export default function StatsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6 px-2 sm:px-0"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative bg-white/80 backdrop-blur border rounded-2xl p-5 sm:p-6
                     text-center shadow-sm hover:shadow-xl transition-all duration-300"
        >
          {/* ICON */}
          <div className="text-3xl sm:text-4xl mb-2 group-hover:animate-pulse">
            {item.icon}
          </div>

          {/* NUMBER */}
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            <CountUp
              end={item.value}
              duration={2}
              enableScrollSpy
              scrollSpyOnce
            />
            {item.suffix || "+"}
          </p>

          {/* LABEL */}
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}