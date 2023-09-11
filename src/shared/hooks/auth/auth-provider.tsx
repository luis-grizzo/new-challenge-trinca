import { useState, useEffect } from 'react'

import { AuthContext } from './use-auth'

import { IUser } from '@/shared/types'

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
  const [userId, setUserId] = useState<number | null>(null)

  const login = (credential: Pick<IUser, 'id' | 'email' | 'password'>) => {
    setAuthInSessionStorage(credential)
    setUserId(credential.id)
  }

  const logout = () => {
    removeAuthInSessionStorage()
    setUserId(null)
  }

  useEffect(() => {
    const userId = validateAuthInSessionStorage()

    setUserId(userId)
  }, [])

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
