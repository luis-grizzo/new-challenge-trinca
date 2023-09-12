import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from '@/shared/constants'
import { IEvent, IUser } from '@/shared/types'
import { getParsedArrayInStorage } from '@/shared/lib'

/**
 * @function removeParticipantInStorage - Remove um participante de um evento.
 *
 * @param userId - Id do usuário autenticado.
 * @param eventId - Id do evento a ser atualizado.
 * @param participantId - Id do participante a ser removido.
 *
 * @returns Caso a remoção resulte verdadeira, retorna o novo evento correspondente, caso contrario, retorna null.
 */

export const removeParticipantInStorage = (
  userId: number | null | undefined,
  eventId: number,
  participantId: number
) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  if (userId) {
    const user = parsedStorage.find(({ id }) => id === userId)

    if (user) {
      const event = user.events.find(({ id }) => id === eventId)

      if (event) {
        const newParticipants = event.participants.filter(
          ({ id }) => id !== participantId
        )

        const newEvent: IEvent = {
          ...event,
          total_raised: newParticipants
            .filter((participant) => participant.paid)
            .map((participant) => participant.contribution_value)
            .reduce((total, value) => total + value, 0),
          participants: newParticipants
        }

        const newStorage = parsedStorage.map((oldUser) => {
          if (oldUser.id === user.id) {
            return {
              ...user,
              events: user.events.map((oldEvent) => {
                if (oldEvent.id === event.id) return newEvent
                else return oldEvent
              })
            }
          } else return oldUser
        })

        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newStorage))

        toast.success('Participante removido!')

        return newEvent
      } else {
        toast.error('Evento não encontrado.')

        return null
      }
    } else {
      toast.error('Usuário não encontrado.')

      return null
    }
  } else {
    toast.error('removeParticipantInStorage - Usuário não autenticado.')

    return null
  }
}
