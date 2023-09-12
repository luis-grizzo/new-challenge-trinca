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

export const Loading = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
    overflow: hidden;

    background-color: ${theme.colors.primary};
    background-image: url('/pattern_bbq.svg');
    background-size: cover;

    .l__content {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4rem;

      .lc__image {
        width: 20rem;
        height: 20rem;

        box-shadow: ${theme.shadows.default};
        backdrop-filter: blur(0.4rem);
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
