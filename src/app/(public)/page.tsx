'use client'

import { Button } from '@/components'

import * as S from './styles'

export default function Batata() {
  return (
    <S.Login>
      <form className="w__login-form">
        <input
          // value={loginForm.email}
          // onChange={(event) =>
          //   setLoginForm((prevValue) => ({
          //     ...prevValue,
          //     email: event.target.value
          //   }))
          // }
          // label="E-mail"
          type="email"
          placeholder="exemplo@exemplo.com"
          autoFocus
        />

        <input
          // value={loginForm.password}
          // onChange={(event) =>
          //   setLoginForm((prevValue) => ({
          //     ...prevValue,
          //     password: event.target.value
          //   }))
          // }
          // label="Senha"
          name="password"
          type="password"
          placeholder="Sua senha"
        />

        <Button variant="default" type="submit" fullWidth>
          Entrar
        </Button>
      </form>

      <Button variant="ghost">Primeira vez? Cadastre-se!</Button>

      {/* <Modal
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
      </Modal> */}
    </S.Login>
  )
}
