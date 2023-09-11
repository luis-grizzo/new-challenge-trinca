import { toast } from "react-toastify"

import { USER_STORAGE_KEY } from "@/shared/constants"
import { IUser, IEvent, IParticipant } from "@/shared/types"
import { getParsedArrayInStorage, generateId } from "@/shared/utils"

/**
 * @function - .
 *
 * @param eventId - .
 * @param participantBaseInfos - .
 *
 * @returns .
 */

export const setParticipantInStorage = (
  userId: number | null,
  eventId: number,
  participantBaseInfos: Pick<IParticipant, 'name' | 'drink_included' | 'contribution_value'>
) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  if (userId) {
    const user = parsedStorage.find(({id}) => id === userId)

    if (user) {
      const event = user.events.find(({id}) => id === eventId)

      if (event) {
        const newEvent: IEvent = {
          ...event,
          participants: [
            ...event.participants,
            {
              ...participantBaseInfos,
              id: generateId(),
              paid: false,
            }
          ]
        }

        const newStorage = parsedStorage.map(oldUser => {
          if(oldUser.id === user.id) {
            return {
              ...user,
              events: user.events.map(oldEvent => {
                if (oldEvent.id === event.id) return newEvent
                else return oldEvent
              })
            }
          } else return oldUser
        })

        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newStorage))

        toast.success("Participante cadastrado com sucesso!")

        return newEvent
      } else {
        toast.error("Evento não encontrado.")

        return null
      }
    } else {
      toast.error("Usuário não encontrado.")

      return null
    }
  } else {
    toast.error("setParticipantInStorage - Usuário não autenticado.")

    return null
  }
}