import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      ::-moz-selection {
        color: ${theme.colors.white};
        background: ${theme.colors.black};
      }
      ::selection {
        color: ${theme.colors.white};
        background: ${theme.colors.black};
      }
    }

    html {
      font-size: 62.5%;
    }

    *,
    ::before,
    ::after {
      border-width: 0;
      border-style: solid;
      border-color: currentColor;
    }

    blockquote,
    dl,
    dd,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    figure,
    p,
    pre {
      margin: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }

    ol,
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    img,
    svg,
    video,
    canvas,
    audio,
    iframe,
    embed,
    object {
      display: block;
    }

    input[type='text'],
    textarea {
      cursor: text;
    }

    input[type='checkbox'],
    button {
      cursor: pointer;
    }

    a {
      text-decoration: none;
    }

    body,
    input,
    button,
    textarea {
      font-family: '__Raleway_7203fb', '__Raleway_Fallback_7203fb', sans-serif;
      font-size: 2rem;
      font-weight: 400;
      line-height: 1;
    }

    .global__tooltip {
      font-size: 1.8rem;
      font-weight: 300;
    }
  `}
`
export default GlobalStyle
