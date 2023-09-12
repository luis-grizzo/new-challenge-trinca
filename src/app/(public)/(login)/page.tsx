import { Metadata } from 'next'

import Login from './login'

export const metadata: Metadata = {
  title: 'Login | Agenda de churras',
  openGraph: {
    title: 'Login | Agenda de churras',
    url: 'https://new-challenge-trinca.vercel.app/'
  }
}

export default function Page() {
  return <Login />
}
