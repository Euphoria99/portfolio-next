import React from 'react'
import Link from 'next/link'

const Error404 = () => {
  return (
    <section id="contact" className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4 items-center justify-center'>
      <h2 className='font-titleFont text-5xl font-semibold'>404 - Not Found</h2>
      <p className='max-w-[600px] text-center text-textDark'>
       There&apos;s NOTHING here...
      </p>
      <Link href="/">Return Home</Link>
    </section>
  )
}

export default Error404
