import styled, { css } from 'styled-components'

export const Layout = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50vh 1fr auto;
    gap: 4rem;

    min-height: 100vh;
    max-width: 100vw;

    background-color: ${theme.colors.background};

    .b__header {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100%;

      background-color: ${theme.colors.primary};
      background-image: url("/pattern_bbq.svg");
      background-size: cover;
      box-shadow: inset ${theme.shadows.default};

      .bh__title {
        font-size: 3.2rem;
        font-weight: 800;

        margin-top: -12rem;
      }
    }

    .b__page-container {
      width: 90vw;
      max-width: 1280px;
      margin: 0 auto;

      margin-top: calc(-4rem - 12rem);
    }

    .b__footer {
      display: flex;
      align-items: center;
      justify-content: center;

      padding-bottom: 4rem;
      overflow: hidden;
    }
  `}
`
