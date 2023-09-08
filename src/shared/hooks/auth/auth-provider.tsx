import { useState, useLayoutEffect } from 'react'

import { AuthContext } from './use-auth'

import { ICredential } from '@/shared/types'

import {
  validateAuthInSessionStorage,
  setAuthInSessionStorage,
  removeAuthInSessionStorage
} from '@/services/auth'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider = ({
  children
}: AuthProviderProps): React.ReactElement => {
  const [isLogged, setIsLogged] = useState(false)

  useLayoutEffect(() => {
    const authenticated = validateAuthInSessionStorage()

    setIsLogged(authenticated)
  })

  const login = (credential: ICredential) => {
    setAuthInSessionStorage(credential)
    setIsLogged(true)
  }

  const logout = () => {
    removeAuthInSessionStorage()
    setIsLogged(false)
  }

  return (
    <AuthContext.Provider value={{ isLogged, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
