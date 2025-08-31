"use client"

export default function Error({ error, reset } : {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className='flex justify-center items-center flex-col gap-6 m-20'>
      <h1 className='text-3xl font-semibold'>Something went wrong!</h1>
      <p className='text-lg'>{error.message}</p>

       <button
        onClick={
          () => reset()
        }
        className='inline-block bg-indigo-700 text-white px-6 py-3 text-lg rounded-2xl cursor-pointer'
      >
        Try again
      </button>
    </main>
  )
}