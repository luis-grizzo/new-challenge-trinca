import { toast } from 'react-toastify'

import { IUser } from '@/shared/types'
import { USER_STORAGE_KEY } from '@/shared/constants'
import { getParsedArrayInStorage } from '@/shared/lib'

/**
 * @function validateUserInStorage - Valida o email e senha fornecidos com os usuários cadastrados no localStorage.
 *
 * @param email - Email a ser validado.
 * @param password - Senha a ser validada.
 *
 * @returns Caso a validação resulte verdadeira, retorna o usuário correspondente, caso contrario, retorna null.
 */

export const validateUserInStorage = (
  email: string,
  password: string
): IUser | null => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  const authenticatedUser = parsedStorage.find(
    (user) => user.email === email && user.password === password
  )

  if (authenticatedUser) return authenticatedUser
  else {
    toast.error('Usuário inválido.')

    return null
  }
}
