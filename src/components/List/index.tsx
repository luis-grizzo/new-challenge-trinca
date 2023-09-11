import { toast } from 'react-toastify'
import { Tooltip } from 'react-tooltip'
import { MdDelete } from 'react-icons/md'
import { IoIosBeer } from 'react-icons/io'

import { IEvent, IParticipant } from '@/shared/types'
import {
  updatePartcipantPaidInStorage,
  removeParticipantInStorage
} from '@/services/user'
import { formatAmount } from '@/shared/utils'
import { useAuth } from '@/shared/hooks/auth'

import { Checkbox, Button } from '@/components'

import * as S from './styles'

interface IListProps {
  eventId: number
  participants: IParticipant[]
  onParticipantUpdate: (event: IEvent) => void
}

export const List = ({
  eventId,
  participants,
  onParticipantUpdate
}: IListProps): React.ReactElement => {
  const { userId } = useAuth()

  const handleOnClick = (eventId: number, participantId: number) => {
    const newEvent = updatePartcipantPaidInStorage(
      userId,
      eventId,
      participantId
    )

    if (newEvent) {
      onParticipantUpdate(newEvent)
    } else {
      toast.error('Erro ao atualizar o evento.')
    }
  }

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    eventId: number,
    participantId: number
  ) => {
    e.stopPropagation()

    const newEvent = removeParticipantInStorage(userId, eventId, participantId)

    if (newEvent) onParticipantUpdate(newEvent)
  }

  return (
    <S.List>
      {participants.length === 0 ? (
        <span>Nenhum participante adicionado ainda :(</span>
      ) : (
        participants.map((participant) => (
          <div
            key={participant.id}
            className={`l__row ${participant.paid ? 'l__row--checked' : ''}`}
            onClick={() => handleOnClick(eventId, participant.id)}
          >
            <div className="lr__left">
              <Checkbox
                label={participant.name}
                checked={participant.paid}
                infoIcon={
                  participant.drink_included
                    ? {
                        icon: <IoIosBeer />,
                        message: 'Bebida inclusa'
                      }
                    : undefined
                }
                readOnly
                labelClassName="lrl__disabled-checkbox"
              />
            </div>

            <span className="lr__right">
              <Button
                variant="ghost"
                icon={<MdDelete />}
                onClick={(e) => handleDelete(e, eventId, participant.id)}
                data-tooltip-id="info-button"
                data-tooltip-content="Remover participante"
                data-place="top"
              />
              <Tooltip id="info-button" className="global__tooltip" />
              {formatAmount(participant.contribution_value / 100)}
            </span>
          </div>
        ))
      )}
    </S.List>
  )
}
