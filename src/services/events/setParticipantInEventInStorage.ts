import { toast } from "react-toastify"

import { EVENT_STORAGE_KEY } from "@/shared/constants"
import { IEvent, IParticipant } from "@/shared/types"
import { getParsedArrayInStorage, generateId } from "@/shared/utils"

export const setParticipantInStorage = (
  eventId: number,
  participantBaseInfos: Pick<IParticipant, 'name' | 'includeDrink' | 'amount'>
) => {
  const parsedStorage = getParsedArrayInStorage<IEvent>(EVENT_STORAGE_KEY)

  const event = parsedStorage.find((event) => event.id === eventId)

  if (event) {
    const newEvent: IEvent = {
      ...event,
      participants: [
        ...event.participants,
        {
          ...participantBaseInfos,
          id: generateId(),
          paid: false
        }
      ]
    }

    const newStorage = parsedStorage.map((event) => {
      if (event.id === newEvent.id) return { ...newEvent }

      return event
    })

    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(newStorage))

    return newEvent
  } else {
    toast.error("Evento não encontrado.")

    return null
  }

}
