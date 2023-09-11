'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

import { useAuth } from '@/shared/hooks/auth'

import GlobalStyle from '@/styles/global'
import { theme } from '@/styles/theme'

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathanme = usePathname()

  const { userId } = useAuth()

  const publicRoutes = ['/']
  const privateRoutes = ['/home', '/details']
  const formattedPathname = pathanme.replace(/(\/\d+)/g, '')

  useEffect(() => {
    if (!!userId) {
      !privateRoutes.includes(formattedPathname) && router.replace('/home')
    } else if (userId === null) {
      !publicRoutes.includes(formattedPathname) && router.replace('/')
    }
  }, [userId])

  if (userId === undefined) return null
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      {children}
    </ThemeProvider>
  )
}
