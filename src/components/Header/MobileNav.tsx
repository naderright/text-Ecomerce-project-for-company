"use client";

import { navbarData } from "@/constants/navbar";
import { useMenu } from "./useMenu";
import Link from "next/link";
import {
  User,
  Search,
  Heart,
  LucideShoppingCart,
  Menu,
  X,
} from "lucide-react";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileNav() {
  const { open, toggle, close } = useMenu(false);

  const ICON_MAP = {
    user: <User size={20} />,
    search: <Search size={20} />,
    heart: <Heart size={20} />,
    LucideShoppingCart: <LucideShoppingCart size={20} />,
  };

  return (
    <div className=" md:hidden flex flex-col sticky top-0 bg-[var(--background)] z-50">
      {/* Top Bar */}
      <div className="flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <div className="text-2xl font-bold ">
          <Link href={"/"} className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="w-[3rem] h-auto"
          />
          Furniro
          
          </Link>
          
        </div>

        {/* Icons + Menu */}
        <div className="flex items-center gap-4">
          {navbarData.icons.map((item) => (
            <Link
              key={item.name}
              href={item.href || "#"}
              className="hover:text-[var(--color-primary)] transition"
            >
              {ICON_MAP[item.icon as keyof typeof ICON_MAP]}
            </Link>
          ))}

          <button className="cursor-pointer" onClick={toggle} aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Absolute with Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full bg-[var(--background)] border-t border-[var(--color-gray2)] px-4 py-4 flex flex-col gap-4"
          >
            {navbarData.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[var(--foreground)] hover:text-[var(--color-primary)] transition"
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
