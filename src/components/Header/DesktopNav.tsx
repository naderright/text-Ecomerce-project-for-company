import { navbarData } from "@/constants/navbar";
import Link from "next/link";
import { User, Search, Heart, LucideShoppingCart } from "lucide-react";
import React, { JSX } from "react";
import logo from '../../../public/logo.png'
import Image from "next/image";
export default function DesktopNav() {
  const ICON_MAP: Record<string, JSX.Element> = {
    user: <User size={20} />,
    search: <Search size={20} />,
    heart: <Heart size={20} />,
    LucideShoppingCart: <LucideShoppingCart size={20} />,
  };



  return (
    <div className=" container mx-auto  hidden md:flex justify-between items-center w-full h-16 sticky top-0 bg-[var(--background)] z-50">
      {/* Logo */}
      <div className="text-2xl font-bold   ">
        <Link href={"/"} className="flex items-center ">
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="w-[3rem] h-auto"
          />
          Furniro

        </Link>      </div>

      {/* Nav Links */}
      <div className="flex gap-12">
        {navbarData.links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className=" text-[#0a0a0a] text-[1rem] font-medium hover:text-[var(--color-primary)] transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Icons */}
      <div className="flex gap-4 md:gap-8 ">
        {navbarData.icons.map((item) => (

          <Link

            key={item.name}
            href={item.href || "#"}
            className="hover:text-[var(--color-primary)] text-[1rem] text-[#0a0a0a] font-medium transition"
          >
            {ICON_MAP[item.icon as keyof typeof ICON_MAP]}
          </Link>
        ))}
      </div>
    </div>
  );
}
