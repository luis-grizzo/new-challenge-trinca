'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSpring, animated } from 'react-spring'
import { format } from 'date-fns'
import { MdKeyboardReturn, MdAdd, MdCheck, MdInfo } from 'react-icons/md'

import { getEventInStorage, setParticipantInStorage } from '@/services/user'

import { IEvent, IParticipant } from '@/shared/types'
import { formatAmount } from '@/shared/utils'
import { useAuth } from '@/shared/hooks/auth'

import {
  Button,
  Modal,
  Input,
  Checkbox,
  CurrencyInput,
  List
} from '@/components'

import * as S from './styles'

export default function Details({
  params
}: {
  params: { id: string }
}): React.ReactElement {
  const router = useRouter()

  const { userId } = useAuth()

  const [event, setEvent] = useState<IEvent | null>(null)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [registerParticipantForm, setRegisterParticipantForm] = useState<
    Pick<IParticipant, 'name' | 'drink_included' | 'contribution_value'>
  >({
    name: '',
    drink_included: false,
    contribution_value: 1500
  })

  const handleSubmit = (e: React.FormEvent, eventId: number) => {
    e.preventDefault()

    const { drink_included, contribution_value } = registerParticipantForm

    const newEvent = setParticipantInStorage(userId, eventId, {
      ...registerParticipantForm,
      contribution_value: drink_included
        ? contribution_value + 2000
        : contribution_value
    })

    setEvent(newEvent)

    setModalIsOpen(false)
    setRegisterParticipantForm({
      name: '',
      drink_included: false,
      contribution_value: 1500
    })
  }

  const wrapperAnimation = useSpring({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 }
  })

  const amountAnimation = useSpring({
    val: event?.total_raised ?? 0,
    from: { val: 0 }
  })

  useEffect(() => {
    const event = getEventInStorage(userId, parseInt(params.id))

    setEvent(event)
  }, [])

  return (
    <S.Details>
      <div className="w__controls">
        <Button
          variant="outlined"
          icon={<MdKeyboardReturn />}
          onClick={() => router.push('/home')}
        >
          Voltar
        </Button>
      </div>

      {event ? (
        <>
          <animated.div style={wrapperAnimation} className="w__page">
            <div className="wp__header">
              <div className="wph__row">
                <div className="wph__column">
                  <span className="wph__date">
                    {format(new Date(event.date), 'dd/MM')}
                  </span>

                  <h1 className="wph__title">{event.title}</h1>
                </div>

                <div className="wph__column">
                  <span className="wph__guests">
                    <Image
                      src="/icon_guests.svg"
                      width={21}
                      height={21}
                      alt="Ícone de convidados"
                    />
                    {event.participants?.length ?? 0}
                  </span>

                  <span className="wph__money">
                    <Image
                      src="/icon_money.svg"
                      width={21}
                      height={21}
                      alt="Ícone cifrão"
                    />
                    <animated.span>
                      {amountAnimation.val.to((value) =>
                        formatAmount(Math.floor(value) / 100)
                      )}
                    </animated.span>
                  </span>
                </div>
              </div>

              {event.description && (
                <div className="wph__additional-information">
                  {event.description}
                </div>
              )}
            </div>

            <div className="wp__list">
              <List
                eventId={event.id}
                participants={event.participants}
                onParticipantUpdate={(newEvent) => setEvent(newEvent)}
              />
            </div>

            <Button
              variant="default"
              fullWidth
              icon={<MdAdd />}
              onClick={() => setModalIsOpen(true)}
            >
              Adicionar Participante
            </Button>
          </animated.div>

          <Modal
            isOpen={modalIsOpen}
            onClose={() => setModalIsOpen(false)}
            modalTitle="Adicionar participante"
          >
            <form
              onSubmit={(e) => handleSubmit(e, event.id)}
              className="wm__form"
            >
              <Input
                value={registerParticipantForm.name}
                onChange={(e) =>
                  setRegisterParticipantForm((prevValue) => ({
                    ...prevValue,
                    name: e.target.value
                  }))
                }
                label="Nome participante"
                placeholder="Qual o nome da fera?"
                autoFocus
              />

              <div className="wmf__money">
                <CurrencyInput
                  value={registerParticipantForm.contribution_value}
                  onChange={(value) => {
                    setRegisterParticipantForm((prevValue) => ({
                      ...prevValue,
                      contribution_value: value
                    }))
                  }}
                  label="Contribuição"
                  description={
                    registerParticipantForm.contribution_value !== 1500
                      ? 'Valor sugerido por participante - R$15,00.'
                      : null
                  }
                />

                <Checkbox
                  checked={registerParticipantForm.drink_included}
                  onChange={() =>
                    setRegisterParticipantForm((prevValue) => ({
                      ...prevValue,
                      drink_included: !prevValue.drink_included
                    }))
                  }
                  label="Incluir bebidas"
                  infoIcon={{
                    icon: <MdInfo />,
                    message: 'Acrécimo de R$20,00'
                  }}
                />
              </div>

              <Button
                variant="default"
                type="submit"
                fullWidth
                icon={<MdCheck />}
                disabled={
                  !registerParticipantForm.name ||
                  registerParticipantForm.contribution_value === 0
                }
              >
                Confirmar
              </Button>
            </form>
          </Modal>
        </>
      ) : (
        <div>Evento não encontrado</div>
      )}
    </S.Details>
  )
}
