import { AUTH_STORAGE_KEY } from '@/shared/constants'

/**
 * @function removeAuthInSessionStorage - Remove a credencial autenticada do sessionStorage.
 */

export const removeAuthInSessionStorage = () => {
  sessionStorage.removeItem(AUTH_STORAGE_KEY)
}
