import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import logo from "@/public/logos/logo.png";

export default function Logo() {
  return (
    <Link href='/'>
        <Image src={logo} alt='Logo' quality={80} className=''/>
    </Link>
  )
}