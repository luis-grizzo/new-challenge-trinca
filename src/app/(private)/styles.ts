import styled, { css, keyframes } from 'styled-components'

const indeterminateAnimation = keyframes`
  0% {
    transform:  translateX(0) scaleX(0);
  }
  40% {
    transform:  translateX(0) scaleX(0.4);
  }
  100% {
    transform:  translateX(100%) scaleX(0.5);
  }
`

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

export const Loading = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    .l__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      padding: 4rem;

      background-color: ${theme.colors.shape};
      box-shadow: ${theme.shadows.default};

      .lc__image {
        width: 20rem;
        height: 20rem;
      }

      .lc__progress-bar {
        height: 0.5rem;
        background-color: ${theme.colors.opaqueBackground};
        width: 100%;
        overflow: hidden;

        .lcpb__bar {
          width: 100%;
          height: 100%;
          background-color: ${theme.colors.black};
          animation: ${indeterminateAnimation} 1s infinite linear;
          transform-origin: 0% 50%;
        }
      }
    }
  `}
`
