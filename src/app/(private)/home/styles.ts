import styled, { css } from 'styled-components'

export const Home = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .w__controls {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 1rem;
    }

    .w__grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      grid-auto-rows: 1fr;
      gap: 2.4rem;

      .wg__event-card,
      .wg__add-event-card {
        min-height: 21rem;
        padding: 2rem 2.5rem;
        border-radius: 0.2rem;
        cursor: pointer;
        box-shadow: ${theme.shadows.default};

        &:focus {
          outline: none;
          box-shadow: 0 0 0 0.3rem ${theme.colors.blackHover};
        }
      }

      .wg__event-card {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 10rem auto;
        gap: 1rem;

        background-color: ${theme.colors.shape};

        .wgec__event-date {
          grid-column-start: span 2;

          font-size: 2.8rem;
          font-weight: 800;

          color: ${theme.colors.black};
        }

        .wgec__description {
          grid-column-start: span 2;

          font-size: 2.1rem;
          font-weight: 700;
          color: ${theme.colors.text};
        }

        .wgec__guests-number,
        .wgec__amount {
          display: flex;
          align-items: center;
          gap: 1rem;

          font-size: 2.1rem;
          font-weight: 500;

          color: ${theme.colors.black};
        }

        .wgec__amount {
          justify-content: flex-end;
        }
      }

      .wg__add-event-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        background-color: ${theme.colors.darkShape};

        .wgaec__image-wrapper {
          display: flex;
          align-items: center;

          justify-content: center;

          width: 8rem;
          aspect-ratio: 1/1;

          border-radius: 50%;
          background-color: ${theme.colors.primary};
        }

        .wgaec__description {
          text-align: right;

          font-size: 2.1rem;
          font-weight: 700;
        }
      }
    }

    .wm__form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 5rem;

      width: 100%;
    }
  `}
`
