import styled, { css } from 'styled-components'

export const Details = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .d__controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .d__page {
      display: flex;
      flex-direction: column;
      gap: 5rem;

      padding: 5rem;
      background-color: ${theme.colors.shape};
      border-radius: 0.2rem;
      box-shadow: ${theme.shadows.default};

      .dp__header {
        display: flex;
        flex-direction: column;
        gap: 2rem;

        .dph__row {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .dph__column {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .dph__date {
          font-size: 2.8rem;
          font-weight: 800;
        }

        .dph__title {
          font-size: 3.6rem;
          font-weight: 700;
        }

        .dph__guests,
        .dph__money {
          display: flex;
          align-items: center;
          gap: 1rem;

          font-size: 2.1rem;
          font-weight: 500;
        }

        .dph__additional-information {
          padding: 2rem;
          border-left: 0.4rem solid ${theme.colors.text};
          color: ${theme.colors.text};
        }
      }
    }

    .dm__form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      width: 100%;

      .dmf__money {
        display: grid;
        grid-template-columns: 1fr auto;
        grid-auto-rows: 1fr;
        align-items: center;
        gap: 1rem;

        width: 100%;
      }
    }

    .dp__not-found {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 5rem;

      .dpnf__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;

        padding: 4rem;

        background-color: ${theme.colors.shape};
        box-shadow: ${theme.shadows.default};
      }

      .dpnfc__icon {
        font-size: 10rem;
      }
    }
  `}
`
