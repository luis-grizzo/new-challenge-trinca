import { AUTH_STORAGE_KEY } from '@/shared/constants'

/**
 * @function validateAuthInSessionStorage - Valida se existe a credencial autenticada no sessionStorage.
 *
 * @returns Boolean.
 */

export const validateAuthInSessionStorage = () => {
  const session = sessionStorage.getItem(AUTH_STORAGE_KEY)

  return !!session
}
