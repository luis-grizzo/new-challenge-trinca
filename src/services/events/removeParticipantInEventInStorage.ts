import {toast} from 'react-toastify'

import { EVENT_STORAGE_KEY } from "@/shared/constants"
import { IEvent } from "@/shared/types"
import { getParsedArrayInStorage } from "@/shared/utils"

export const removeParticiantInEventInStorage = (eventId: number, participantId: number) => {
  const parsedStorage = getParsedArrayInStorage<IEvent>(EVENT_STORAGE_KEY)

  const event = parsedStorage.find(event => event.id === eventId)

  if(event){
    const newEventParticipants = event.participants.filter(participant => participant.id !== participantId)

    const newEvent: IEvent = {
      ...event,
      value: newEventParticipants.filter(participant => participant.paid).map(participant => participant.amount).reduce((total, value) => total + value, 0),
      participants: newEventParticipants
    }

    const newStorage = parsedStorage.map(event => {
      if(event.id === newEvent.id) return newEvent
      else return event
    })

    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(newStorage))

    return newEvent
  } else {
    toast.error('Evento não encontrado.')

    return null
  }
}
