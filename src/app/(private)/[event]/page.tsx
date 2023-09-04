'use client'

import Link from 'next/link'

export default function Event({ params }: { params: { event: string } }) {
  console.log(params.event)

  return (
    <>
      <h1>Event: {params.event}</h1>

      <p>
        Ir para <Link href="/home">Home</Link>
      </p>
    </>
  )
}
