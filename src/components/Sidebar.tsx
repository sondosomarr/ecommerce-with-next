"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, List, LogOut } from "lucide-react"; // Importing icons

const sidebarItems = [
  { name: "Home", path: "/", icon: <Home size={20} /> },
  { name: "Categories", path: "/products/category", icon: <List size={20} /> },
  { name: "Logout", path: "/logout", icon: <LogOut size={20} /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixid top-0 left-0 h-screen w-60 bg-white text-orange-800 flex flex-col p-4">

      {/* Navigation Links */}
      <nav className="flex flex-col gap-4 w-full">
        {sidebarItems.map(({ name, path, icon }) => (
          <Link
            href={path}
            key={path}
            className={`flex items-center gap-2 px-4 py-2 rounded-md ${
              pathname === path ? "text-orange-700 font-semibold" : "hover:underline"
            } transition`}
          >
            {icon} {name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
