'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

import { useAuth } from '@/shared/hooks/auth'

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathanme = usePathname()

  const { userId } = useAuth()

  const publicRoutes = ['/']
  const privateRoutes = ['/home', '/details']
  const formattedPathname = pathanme.replace(/(\/\d+)/g, '')

  useEffect(() => {
    if (!!userId) {
      !privateRoutes.includes(formattedPathname) && router.push('/home')
    } else {
      !publicRoutes.includes(formattedPathname) && router.push('/')
    }
  }, [userId])

  return <>{children}</>
}
