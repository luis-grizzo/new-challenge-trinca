import Link from 'next/link'

export default function Home() {
  return (
    <>
      <h1>Home</h1>

      <p>
        Ir para <Link href="/teste1">Eventos</Link>
      </p>
    </>
  )
}