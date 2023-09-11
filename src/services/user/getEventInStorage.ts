import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from "@/shared/constants"
import { IUser } from "@/shared/types"
import { getParsedArrayInStorage } from "@/shared/utils"

/**
 * @function getEventInStorage - .
 *
 * @param userId - .
 * @param eventId - .
 *
 * @returns .
 */

export const getEventInStorage = (userId: number | null, eventId: number) => {
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
