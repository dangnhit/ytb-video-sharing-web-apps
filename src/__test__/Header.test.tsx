import { render, screen } from '@testing-library/react'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom'

describe('Header Component', () => {
  test("should show a h1 tag with the text 'Funny Movies'", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
    const text = screen.getByText('Funny Movies')
    expect(text).toBeInTheDocument()
  })
})
