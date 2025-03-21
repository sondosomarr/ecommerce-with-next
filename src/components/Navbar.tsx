"use client"
import React from 'react'
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from './Logo';
const navItems =[
  {name: "Home", path: "/"},
  {name: "Products", path: "/products"},
  {name: "About", path: "/about"}
]
export default function Navbar() {
  const pathname=usePathname()
  return (

    <nav className="bg-white text-amber-900 px-8 py-4 border-b border-primary-800 flex  ">
      <div className="flex justify-between items-end max-w-6xl mx-auto w-full ">
        {/* <img src="icon.png" alt="" width={35} height={35} className='flex items-center z-10 gap-4'/> */}
        <Logo />
        <div className="flex gap-6">

        {navItems.map(({ name, path }, index) => (
          <Link
          href={path}
          key={index}
          className={`px-3 py-2 rounded-md ${
            pathname === path ? "text-orange-700 font-semibold" : "hover:underline"
          }`}
          >
            {name}
          </Link>
        ))}
        </div>
      </div>
      
    </nav>
  )
}
