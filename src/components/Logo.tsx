import React from 'react'
import Image from "next/image";
import logo from "../app/icon.png"
import Link from 'next/link';
export default function Logo() {
  return (
    <div className='ml-0'>
        <Link href="/" className="flex items-center gap-4 z-10">
      <Image src={logo} alt="logo" width={50} height={50} />
    </Link>
    
    </div>
  )
}
