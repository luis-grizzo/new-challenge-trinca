import { createContext, useContext } from 'react'

import { ICredential } from '@/shared/types'

type UseAuthData = {
  isLogged: boolean
  login: (login: ICredential) => void
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
