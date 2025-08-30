import Image from 'next/image'
import React from 'react'
import logo from "@/public/logos/logo.png";
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href='/'>
        <Image src={logo} alt='Logo' quality={80} className=''/>
    </Link>
  )
}