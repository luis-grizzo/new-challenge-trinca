import { AUTH_STORAGE_KEY } from '@/shared/constants'
import { IUser } from '@/shared/types'

/**
 * @function validateAuthInSessionStorage - Valida se existe o usuário autenticado no sessionStorage.
 *
 * @returns Caso a validação resulte verdadeira, retorna o id do usuário correspondente, caso contrario, retorna null.
 */

export const validateAuthInSessionStorage = () => {
  const session = sessionStorage.getItem(AUTH_STORAGE_KEY)

  if (session) {
    const parsedSession: IUser = JSON.parse(session)

    return parsedSession.id
  } else {
    return null
  }
}
