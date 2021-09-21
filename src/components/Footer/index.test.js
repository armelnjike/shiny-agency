import Footer from './../Footer'
import {screen, render,fireEvent } from '@testing-library/react'
import { ContextProvider } from '../../utils/context'

describe('Footer test', () => {
    test('Should render without crashing', async () => {
        render(
            <ContextProvider>
                <Footer />
            </ContextProvider>
        )
        const NightModeButton = screen.getByRole('button')
        expect(NightModeButton.textContent).toBe('Changer de mode :☀️')
        fireEvent.click(NightModeButton)
        expect(NightModeButton.textContent).toBe('Changer de mode :🌙')
    })
})