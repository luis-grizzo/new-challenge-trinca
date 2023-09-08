import { IEvent } from '@/shared/types/event'
import { generateId, getParsedArrayInStorage } from '@/shared/utils'
import { EVENT_STORAGE_KEY } from '@/shared/constants'

/**
 * @function setEventInStorage - Cadastra um novo evento no localStorage.
 *
 * @param eventBaseInfos - Objeto com as informações base do evento.
 *
 * @returns Novo array com o evento cadastrado.
 */


export const setEventInStorage = (
  eventBaseInfos: Pick<IEvent, 'title' | 'date' | 'additionalInfo'>
) => {
  const parsedStorage = getParsedArrayInStorage<IEvent>(EVENT_STORAGE_KEY)

  const newStorage: IEvent[] = [
    ...parsedStorage,
    {
      ...eventBaseInfos,
      id: generateId(),
      value: 0,
      participants: []
    }
  ]

  localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(newStorage))

  return newStorage
}
