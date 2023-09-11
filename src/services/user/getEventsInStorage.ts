import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from "@/shared/constants"
import { IUser } from "@/shared/types"
import { getParsedArrayInStorage } from "@/shared/utils"

/**
 * @function getEventsInStorage - .
 *
 * @param userId - .
 *
 * @returns .
 */

export const getEventsInStorage = (userId: number | null | undefined) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  if (userId) {
    const user = parsedStorage.find(user => user.id === userId)

    if (user) {
      return user.events
    } else {
      toast.error("Usuário não encontrado.")

      return null
    }
  } else {
    toast.error("getEventsInStorage - Usuário não autenticado.")

    return null
  }
}
