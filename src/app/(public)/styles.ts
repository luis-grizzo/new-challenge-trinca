import styled, { css } from 'styled-components'

export const Layout = styled.main`
${({ theme }) => css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40vh 1fr auto;
  gap: 4rem;

  min-height: 100vh;
  max-width: 100vw;

  background-color: ${theme.colors.primary};

  .b__header {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    background-image: linear-gradient(
        to bottom,
        transparent 60%,
        ${theme.colors.primary} 100%
      ),
      url('/pattern_bbq.svg');
    background-size: cover;

    .bh__title {
      font-size: 3.2rem;
      font-weight: 800;

      margin-top: -8rem;
    }
  }

  .b__page-container {
    width: 90vw;
    max-width: 1280px;
    margin: 0 auto;

    margin-top: calc(-4rem - 8rem);
  }

  .b__footer {
    display: flex;
    align-items: center;
    justify-content: center;

    padding-bottom: 4rem;
    overflow: hidden;

    .bf__image {
    }
  }
`}
`

export const Login = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  .w__login-form,
  .wm__register-form {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    width: 100%;
  }

  .w__login-form {
    max-width: 50rem;
  }
`
