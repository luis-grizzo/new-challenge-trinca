'use client'

import { Suspense } from 'react'
import { Raleway } from 'next/font/google'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.min.css'

import { AuthProvider } from '@/shared/hooks/auth'

import Template from './template'
import Loading from './loading'

import StyledComponentsRegistry from '@/styles/registry'
import GlobalStyle from '@/styles/global'
import { theme } from '@/styles/theme'

const raleway = Raleway({
  weight: ['300', '400', '500', '700', '800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Churras Trinca',
  description: 'Desafio tecnico front-end da empresa Trinca.'
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
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ToastContainer />
            <AuthProvider>
              <Template key={10}>
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </Template>
            </AuthProvider>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
