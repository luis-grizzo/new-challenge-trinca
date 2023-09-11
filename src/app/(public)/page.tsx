'use client'

import { useState } from 'react'
import { MdCreate } from 'react-icons/md'

import { setUserInStorage, validateUserInStorage } from '@/services/user'

import { useAuth } from '@/shared/hooks/auth'

import { Button, Input, Modal } from '@/components'

import * as S from './styles'

interface ILoginInputs {
  email: string
  password: string
}

interface IRegisterInputs {
  email: string
  password: string
}

export default function Login() {
  const { login } = useAuth()

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [registerForm, setRegisterForm] = useState<IRegisterInputs>({
    email: '',
    password: ''
  })
  const [loginForm, setLoginForm] = useState<ILoginInputs>({
    email: '',
    password: ''
  })

  const onRegisterSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const { email, password } = registerForm

    setUserInStorage(email, password)

    setModalIsOpen(false)
    setRegisterForm({
      email: '',
      password: ''
    })
  }

  const onLoginSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    const { email, password } = loginForm

    const authenticated = validateUserInStorage(email, password)

    if (authenticated) {
      login({
        id: authenticated.id,
        email: authenticated.email,
        password: authenticated.password
      })

      setLoginForm({
        email: '',
        password: ''
      })
    }
  }

  return (
    <S.Login>
      <form onSubmit={onLoginSubmit} className="w__login-form">
        <Input
          value={loginForm.email}
          onChange={(event) =>
            setLoginForm((prevValue) => ({
              ...prevValue,
              email: event.target.value
            }))
          }
          label="E-mail"
          type="email"
          placeholder="exemplo@exemplo.com"
          autoFocus
        />

        <Input
          value={loginForm.password}
          onChange={(event) =>
            setLoginForm((prevValue) => ({
              ...prevValue,
              password: event.target.value
            }))
          }
          name="password"
          label="Senha"
          type="password"
          placeholder="Sua senha"
        />

        <Button variant="default" type="submit" fullWidth>
          Entrar
        </Button>
      </form>

      <Button variant="ghost" onClick={() => setModalIsOpen(true)}>
        Primeira vez? Cadastre-se!
      </Button>

      <Modal
        isOpen={modalIsOpen}
        modalTitle="Adicionar Conta"
        onClose={() => setModalIsOpen(false)}
      >
        <form onSubmit={onRegisterSubmit} className="wm__register-form">
          <Input
            value={registerForm.email}
            onChange={(event) =>
              setRegisterForm((prevValue) => ({
                ...prevValue,
                email: event.target.value
              }))
            }
            label="E-mail"
            type="email"
            placeholder="Seu email, tipo: exemplo@exemplo.com"
            autoFocus
          />

          <Input
            value={registerForm.password}
            onChange={(event) =>
              setRegisterForm((prevValue) => ({
                ...prevValue,
                password: event.target.value
              }))
            }
            label="Senha"
            type="password"
            placeholder="Sua senha secreta ;)"
          />

          <Button
            variant="default"
            fullWidth
            icon={<MdCreate />}
            type="submit"
            disabled={!registerForm.email || !registerForm.password}
          >
            Adicionar
          </Button>
        </form>
      </Modal>
    </S.Login>
  )
}
