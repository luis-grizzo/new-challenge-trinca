import { toast } from "react-toastify"

import { USER_STORAGE_KEY } from "@/shared/constants"
import { IUser, IEvent, IParticipant } from "@/shared/types"
import { getParsedArrayInStorage, generateId } from "@/shared/lib"

/**
 * @function setParticipantInStorage - Adiciona um participante em um evento.
 *
 * @param eventId - Id do evento a ser atualizado.
 * @param participantBaseInfos - Informações base para a criação do evento.
 *
 * @returns Caso a adição resulte verdadeira, retorna o evento correspondente atualizado, caso contrario, retorna null.
 */

export const setParticipantInStorage = (
  userId: number | null | undefined,
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
