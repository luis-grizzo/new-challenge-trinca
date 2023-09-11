'use client'

import { useState, useEffect } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { useTrail, animated, useSpring } from 'react-spring'
import { format } from 'date-fns'
import { MdCheck, MdLogout } from 'react-icons/md'

import { getEventsInStorage, setEventInStorage } from '@/services/user'

import { IEvent } from '@/shared/types'
import { useAuth } from '@/shared/hooks/auth'
import { formatAmount } from '@/shared/lib'

import { Modal, DatePicker, Input, Textarea, Button } from '@/components'

import * as S from './styles'

export default function Home(): React.ReactElement {
  const { userId, logout } = useAuth()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [events, setEvents] = useState<IEvent[] | null>(null)
  const [registerEventForm, setRegisterEventForm] = useState<
    Pick<IEvent, 'title' | 'date' | 'description'>
  >({
    title: '',
    date: new Date(),
    description: ''
  })

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const newState = setEventInStorage(userId, registerEventForm)

    setEvents(newState)

    setModalIsOpen(false)
    setRegisterEventForm({
      title: '',
      date: new Date(),
      description: ''
    })
  }

  const AnimatedLink = animated(Link)

  const trail = useTrail(events?.length ?? 0, {
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0 },
    onResolve({ finished }) {
      if (finished) {
        addEventCardAniamtionApi.resume()
      } else {
        addEventCardAniamtionApi.pause()
      }
    }
  })

  const [addEventCardAniamtion, addEventCardAniamtionApi] = useSpring(
    () => ({
      from: { opacity: 0, y: 100 },
      to: { opacity: 1, y: 0 }
    }),
    []
  )

  useEffect(() => {
    const events = getEventsInStorage(userId)

    setEvents(events)
  }, [])

  return (
    <S.Home>
      <div className="w__controls">
        <Button variant="outlined" icon={<MdLogout />} onClick={() => logout()}>
          Sair
        </Button>
      </div>

      <div className="w__grid">
        {events &&
          trail.map((style, index) => (
            <AnimatedLink
              key={events[index].id}
              style={style}
              href={`/details/${events[index].id}`}
              className="wg__event-card"
              tabIndex={1}
            >
              <div className="wgec__event-date">
                {format(new Date(events[index].date), 'dd/MM')}
              </div>

              <div className="wgec__description">{events[index].title}</div>

              <div className="wgec__guests-number">
                <Image
                  src="/icon_guests.svg"
                  width={20}
                  height={20}
                  alt="Ícone convidados"
                />
                {events[index].participants.length}
              </div>

              <div className="wgec__amount">
                <Image
                  src="/icon_money.svg"
                  width={20}
                  height={20}
                  alt="Ícone cifrão"
                />
                {formatAmount(events[index].total_raised / 100)}
              </div>
            </AnimatedLink>
          ))}

        <animated.div
          style={addEventCardAniamtion}
          onClick={() => setModalIsOpen(true)}
          className="wg__add-event-card"
        >
          <div className="wgaec__image-wrapper">
            <Image
              src="/icon_bbq.svg"
              width={40}
              height={40}
              alt="Ícone de churrasqueira."
            />
          </div>

          <span className="wgaec__description">Adicionar Churras</span>
        </animated.div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        modalTitle="Adicionar churras"
      >
        <form onSubmit={onSubmit} className="wm__form">
          <Input
            value={registerEventForm.title}
            onChange={(event) =>
              setRegisterEventForm((prevValue) => ({
                ...prevValue,
                title: event.target.value
              }))
            }
            label="Titulo"
            type="text"
            placeholder="Qual o motivo da festa?"
            autoFocus
          />

          <DatePicker
            value={registerEventForm.date}
            onChange={(date) =>
              setRegisterEventForm((prevValue) => ({
                ...prevValue,
                date
              }))
            }
            label="Selecione uma data"
            placeholder="Escolha uma boa data para celebrar!"
          />

          <Textarea
            value={registerEventForm.description}
            onChange={(event) =>
              setRegisterEventForm((prevValue) => ({
                ...prevValue,
                description: event.target.value
              }))
            }
            label="Informações adicionais"
            placeholder="O que o pessoal não pode esquecer? (Opcional)"
          />

          <Button
            variant="default"
            type="submit"
            fullWidth
            icon={<MdCheck />}
            disabled={!registerEventForm.title}
          >
            Adicionar
          </Button>
        </form>
      </Modal>
    </S.Home>
  )
}
