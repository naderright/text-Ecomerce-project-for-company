import { NavbarData } from "@/types/navbar";

import { User, Search, Heart, LucideShoppingCart } from "lucide-react";

export const navbarData: NavbarData = {
  links: [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  icons: [
    { name: "User", icon: "user", href: "/profile" },
    { name: "Search", icon: "search" },
    { name: "Wishlist", icon: "heart", href: "/wishlist" },
    { name: "Sell", icon: "LucideShoppingCart", href: "/sell" },
  ],
};
