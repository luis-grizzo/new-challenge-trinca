import { Suspense } from 'react'
import { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import 'react-toastify/dist/ReactToastify.min.css'

import { AuthProvider } from '@/shared/hooks/auth'

import StyledComponentsRegistry from '@/styles/registry'
import { theme } from '@/styles/theme'

import Template from './template'
import Loading from './loading'

const raleway = Raleway({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata: Metadata = {
  icons: {
    icon: '/icon.svg'
  },
  description: 'Desafio tecnico front-end da empresa Trinca.',
  themeColor: `${theme.colors.primary}`,
  openGraph: {
    description: 'Desafio tecnico front-end da empresa Trinca.',
    images: [
      {
        url: '/icon.svg',
        width: 500,
        height: 500
      }
    ]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={raleway.className}>
      <body>
        <StyledComponentsRegistry>
          <AuthProvider>
            <Suspense fallback={<Loading />}>
              <Template key={1}>{children}</Template>
            </Suspense>
          </AuthProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
