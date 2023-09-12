'use client'

import { useState, useLayoutEffect } from 'react'

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
  const [userId, setUserId] = useState<number | null | undefined>(undefined)

  const login = (credential: Pick<IUser, 'id' | 'email' | 'password'>) => {
    setAuthInSessionStorage(credential)
    setUserId(credential.id)
  }

  const logout = () => {
    removeAuthInSessionStorage()
    setUserId(null)
  }

  useLayoutEffect(() => {
    const userId = validateAuthInSessionStorage()

    setUserId(userId)
  }, [])

  return (
    <AuthContext.Provider value={{ userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
