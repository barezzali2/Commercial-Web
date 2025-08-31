"use client"
import Link from 'next/link'
import React from 'react'

export default function error() {
  return (
    <main className='flex justify-center items-center flex-col gap-6 m-20'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>

       <Link
        href='/'
        className='inline-block bg-indigo-700 text-white px-6 py-3 text-lg rounded-2xl'
      >
        Try again
      </Link>
    </main>
  )
}
