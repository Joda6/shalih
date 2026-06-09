"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "الرئيسية", href: "/" },
    { name: "خدماتنا", href: "/services" },
    { name: "من نحن", href: "/about" },
    { name: "الحجز", href: "/booking" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="bg-[#0B1B2B]/70 backdrop-blur-xl border-b border-white/10">

        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

          {/* LOGO */}
          <Link href="/">
            <h1 className="text-white text-2xl font-bold cursor-pointer">
              <span className="text-[#38E8D6]">الشاليهات</span> الذهبية
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-white/80">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="hover:text-[#38E8D6] transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* BUTTON */}
          <Link
            href="/booking"
            className="hidden md:block bg-gradient-to-r from-[#38E8D6] to-[#60A5FA] text-black px-5 py-2 rounded-full font-bold"
          >
            احجز الآن
          </Link>

          {/* MOBILE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white text-xl"
          >
            <FaBars />
          </button>

        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden bg-[#0B1B2B] p-4 flex flex-col gap-3">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

      </div>
    </motion.header>
  );
}