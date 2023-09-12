import { Metadata } from 'next'

import Home from './home'

export const metadata: Metadata = {
  title: 'Home | Agenda de churras',
  openGraph: {
    title: 'Home | Agenda de churras',
    url: 'https://new-challenge-trinca.vercel.app/home'
  }
}

export default function Page(): React.ReactElement {
  return <Home />
}
