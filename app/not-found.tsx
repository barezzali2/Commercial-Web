import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className='text-center space-y-6 m-20'>
      <h1 className='text-3xl font-semibold'>
        This page could not be found :(
      </h1>
      <Link
        href='/'
        className='inline-block bg-indigo-700 text-white px-6 py-3 text-lg rounded-2xl'
      >
        Go back home
      </Link>
    </main>
  )
}
