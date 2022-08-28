import { render } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'

import { theme } from '../../styles/theme'
import App from '.'

it('should render', () => {
  render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
  )
})
