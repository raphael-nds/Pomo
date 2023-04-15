import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
   
   * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
   }

   :focus {
      outline: 0;
      // box-shadow: 0 0 0px 1px blue;
   }

   ${({ theme }) => css`
     body {
       background-color: ${theme.colors.gray[800]};
       color: ${theme.colors.white[100]};
     }
   `}
   
   body, input, button, textarea {
      font-family: 'Roboto Mono', monospace;
      font-size: 1rem;
   }
`
