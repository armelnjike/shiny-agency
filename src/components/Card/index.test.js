import {screen, render,fireEvent } from '@testing-library/react'
import Card from './'
import {ContextProvider} from '../../utils/context'
import {logo} from '../../logo.svg'

describe('test sur le composant de profils card',() => {
    it('should use the picture passed trought prop', () => {
        render(
            <ContextProvider>
              <Card
                title="Harry Potter"
                label="Magicien frontend"
                picture="/myicture.png"
              />
            </ContextProvider>
          )
          const cardPicture = screen.getByRole('img')
          const cardTitle = screen.getByText(/Harry/i)
          expect(cardPicture.src).toBe('http://localhost/myicture.png')
          expect(cardTitle.textContent).toBe(' Harry Potter ')
        })
        test('Should add ⭐️ around title', async () => {
          render(
            <ContextProvider>
              <Card
                title="Harry Potter"
                label="Magicien frontend"
                picture="/myPicture.png"
              />
            </ContextProvider>
          )
          const cardTitle = screen.getByText(/Harry/i)
          const parentNode = cardTitle.closest('div')
          fireEvent.click(parentNode)
          expect(cardTitle.textContent).toBe('⭐️ Harry Potter ⭐️')
    })
})