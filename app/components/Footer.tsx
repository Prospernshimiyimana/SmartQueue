"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="border-t bg-white mt-20"
    >

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          {/* BRAND */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-lg sm:text-xl font-bold">SmartQueue</h2>

            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              A modern queue management system that improves customer experience
              and reduces waiting time.
            </p>
          </motion.div>

          {/* LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="font-semibold mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-sm text-gray-600">

              {[
                { href: "/", label: "Home" },
                { href: "/display", label: "Display" },
                { href: "/admin", label: "Admin" },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="relative w-fit group"
                >
                  <span className="group-hover:text-black transition">
                    {link.label}
                  </span>

                  {/* underline animation */}
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}

            </div>
          </motion.div>

          {/* CONTACT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-semibold mb-4">Contact</h3>

            <p className="text-sm text-gray-500 leading-relaxed">
              Kigali, Rwanda <br />
              support@smartqueue.com
            </p>

           
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="border-t mt-10 pt-6 flex flex-col sm:flex-row gap-2 sm:gap-0 justify-between text-xs text-gray-400 text-center sm:text-left"
        >

          <p>© {new Date().getFullYear()} SmartQueue. All rights reserved.</p>

          

        </motion.div>

      </div>

    </motion.footer>
  );
}