import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

import { CycleProvider } from './contexts/CyclesContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CycleProvider>
        <App />
      </CycleProvider>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
