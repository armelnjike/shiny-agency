import { render as rtlRender } from '@testing-library/react'
import { ContextProvider, SurveyProvider } from '../../utils/context'
import { MemoryRouter } from 'react-router-dom'

export function render(ui, options) {
  function Wrapper({ children }) {
    return (
      <MemoryRouter {...options}>
        <ContextProvider>
          <SurveyProvider>{children}</SurveyProvider>
        </ContextProvider>
      </MemoryRouter>
    )
  }
  rtlRender(ui, { wrapper: Wrapper })
}