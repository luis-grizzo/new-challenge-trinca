import { ICredential } from '@/shared/types'
import { AUTH_STORAGE_KEY } from '@/shared/constants'

/**
 * @function setAuthInSessionStorage - Adiciona a credencial autenticada ao sessionStorage.
 *
 * @param credential - Credencial a ser adicionada no sessionStorage.
 */

export const setAuthInSessionStorage = (credential: ICredential) => {
  sessionStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(credential))
}
