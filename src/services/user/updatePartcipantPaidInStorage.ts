import { toast } from 'react-toastify'

import { USER_STORAGE_KEY } from '@/shared/constants'
import { IEvent, IUser } from '@/shared/types'
import { getParsedArrayInStorage } from '@/shared/lib'

/**
 * @function updatePartcipantPaidInStorage - Atualiza o status de pago do participante no evento.
 *
 * @param userId - Id do usuário autenticado.
 * @param eventId - Id do evento a ser atualziado.
 * @param participantId - Id do participante a ser autalizado.
 *
 * @returns Caso a atualização resulte verdadeira, retorna o evento correspondente atualziado, caso contrario, retorna null.
 */

export const updatePartcipantPaidInStorage = (
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
        const newParticipants = event.participants.map((oldParticipant) => {
          if (oldParticipant.id === participantId)
            return { ...oldParticipant, paid: !oldParticipant.paid }
          else return oldParticipant
        })

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

        toast.info('Participante atualizado!')

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
    toast.error('Usuário não autenticado.')

    return null
  }
}
