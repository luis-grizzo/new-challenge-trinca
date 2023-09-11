import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from "@/shared/constants"
import { IUser } from "@/shared/types"
import { getParsedArrayInStorage } from "@/shared/lib"

/**
 * @function getEventInStorage - Busca um evento no storage.
 *
 * @param userId - Id do usuário autenticado.
 * @param eventId - Id do evento a ser pesquisado.
 *
 * @returns Caso a busca resulte verdadeira, retorna o evento correspondente, caso contrario, retorna null.
 */

export const getEventInStorage = (userId: number | null | undefined, eventId: number) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  if (userId) {
    const user = parsedStorage.find(({id}) => id === userId)

    if (user) {
      const event = user.events.find(({ id }) => id === eventId)

      if (event) {
        return event
      } else {
        toast.error("Churras não encontrado.")

        return null
      }
    } else {
      toast.error("Usuário não encontrado.")

      return null
    }
  } else {
    toast.error("getEventInStorage - Usuário não autenticado.")

    return null
  }
}
