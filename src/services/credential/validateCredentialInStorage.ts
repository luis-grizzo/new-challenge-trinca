import { toast } from 'react-toastify'

import { ICredential } from '@/shared/types'
import { CREDENTIAL_STORAGE_KEY } from '@/shared/constants'
import { getParsedArrayInStorage } from '@/shared/utils'

/**
 * @function validateCredentialInStorage - Autentica o email e senha fornecidos com as credenciais cadastradas no localStorage.
 *
 * @param email - Email a ser autenticado.
 * @param password - Senha a ser autenticada.
 *
 * @returns Caso a autenticação retorne verdadeira, retorna a credencial correspondente, caso contrario, retorna null.
 */

export const validateCredentialInStorage = (
  email: string,
  password: string
): ICredential | null => {
  const parsedStorage = getParsedArrayInStorage<ICredential>(CREDENTIAL_STORAGE_KEY)

  const authenticatedCredential = parsedStorage.find(
    (credential) => credential.email === email && credential.password === password
  )

  if (authenticatedCredential) return authenticatedCredential
  else {
    toast.error('Login inválido.')
    return null
  }
}
