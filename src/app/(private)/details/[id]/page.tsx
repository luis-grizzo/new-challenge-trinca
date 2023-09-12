import { Metadata } from 'next'

import Details from './details'

interface IProps {
  params: { id: string }
}

export async function generateMetadata({
  params: { id }
}: IProps): Promise<Metadata> {
  return {
    title: `Churras ${id} | Agenda de churras`,
    openGraph: {
      title: `Churras ${id} | Agenda de churras`,
      url: `https://new-challenge-trinca.vercel.app/details/${id}`
    }
  }
}

export default function Page({ params }: IProps): React.ReactElement {
  return <Details params={params} />
}
