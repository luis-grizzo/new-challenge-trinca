import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from '@/shared/constants'
import { IUser } from '@/shared/types'
import { getParsedArrayInStorage } from '@/shared/lib'

/**
 * @function getEventsInStorage - Busca os eventos cadastrados de um usuário.
 *
 * @param userId - Id do usuário autenticado.
 *
 * @returns Caso a busca resulte verdadeira, retorna os eventos correspondentes, caso contrario, retorna null.
 */

export const getEventsInStorage = (userId: number | null | undefined) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  if (userId) {
    const user = parsedStorage.find((user) => user.id === userId)

    if (user) {
      return user.events
    } else {
      toast.error('Usuário não encontrado.')

      return null
    }
  } else {
    toast.error('Usuário não autenticado.')

    return null
  }
}
