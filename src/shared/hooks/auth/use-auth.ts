import { createContext, useContext } from 'react'

import { IUser } from '@/shared/types'

type UseAuthData = {
  userId: number | null | undefined
  login: (login: Pick<IUser, 'id' | 'email' | 'password'>) => void
  logout: () => void
}

export const AuthContext = createContext<UseAuthData | undefined>(undefined)

export const useAuth = (): UseAuthData => {
  const context = useContext(AuthContext)

  if (!context)
    throw new Error(
      'useAuth can only be called inside of a AuthProvider component'
    )

  return context
}
