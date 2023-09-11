import styled, { css } from 'styled-components'

export const List = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-radius: 0.2rem;

    .l__row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 5rem;

      padding: 2rem 1rem;
      border-bottom: 2px solid ${theme.colors.primary};
      cursor: pointer;
      overflow-x: auto;
      transition: ${theme.transitions.default};

      &:hover {
        background-color: ${theme.colors.background};
      }

      &--checked {
        .lr__right {
          text-decoration: line-through;
        }
      }

      .lr__left {
        display: flex;
        align-items: center;
        gap: 1rem;

        .lrl__disabled-checkbox {
          pointer-events: none;
        }
      }

      .lr__right {
        display: flex;
        align-items: center;
        gap: .8rem;

        font-size: 2.1rem;
        font-weight: 700;
      }
    }
  `}
`
