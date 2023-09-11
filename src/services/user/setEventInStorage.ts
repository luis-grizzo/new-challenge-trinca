import { toast } from 'react-toastify'

import { IEvent, IUser } from '@/shared/types'
import { generateId, getParsedArrayInStorage } from '@/shared/utils'
import { USER_STORAGE_KEY } from '@/shared/constants'

/**
 * @function setEventInStorage - Cadastra um novo evento no usuário logado no localStorage.
 *
 * @param eventBaseInfos - Objeto com as informações base do evento.
 *
 * @returns Novo array com o evento cadastrado.
 */


export const setEventInStorage = (
  userId: number | null,
  eventBaseInfos: Pick<IEvent, 'title' | 'date' | 'description'>
) => {
  const parsedStorage = getParsedArrayInStorage<IUser>(USER_STORAGE_KEY)

  if (userId) {
    const user = parsedStorage.find(({ id }) => id === userId)

    if (user) {
      const newEvents: IEvent[] = [
        ...user.events,
        {
          ...eventBaseInfos,
          id: generateId(),
          total_raised: 0,
          participants: []
        }
      ]

      const newStorage = parsedStorage.map((oldUser) => {
        if (oldUser.id === user.id) {
          return {
            ...user,
            events: newEvents
          }
        } else return oldUser
      })

      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(newStorage))

      toast.success("Churras cadastrado com sucesso!")

      return newEvents
    } else {
      toast.error("Usuário não encontrado.")

      return null
    }
  } else {
    toast.error("setEventInStorage - Usuário não autenticado.")

    return null
  }


}
