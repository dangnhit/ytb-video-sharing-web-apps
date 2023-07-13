import { render, screen } from '@testing-library/react'
import { AuthContext } from '../contexts'
import LoginForm from '../components/Login'
import { BrowserRouter } from 'react-router-dom'

describe('LoginForm Component', () => {
  const loginOrRegister = jest.fn()
  const logout = jest.fn()

  beforeEach(() => {
    loginOrRegister.mockClear()
    logout.mockClear()
  })

  test('should show login form when user is not authenticated', () => {
    render(
      <AuthContext.Provider value={{ auth: { accessToken: '', userId: '', email: '' }, loginOrRegister, logout }}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByText('Login/Register')).toBeInTheDocument()
  })

  test('should show user information when user is authenticated', () => {
    render(
      <AuthContext.Provider
        value={{
          auth: {
            accessToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyOTM2ODhjNy0xYTIwLTRmMzYtOGRlYS04YTJiNjEwMjEyNGIiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODg4MjgwODEsImV4cCI6MTcyMDM4NTAwN30.LVvt_Yrd1R7AWe18gH_RkJc8gHGQBoIqSDidElc4T2o',
            userId: '0a09c615-0370-4863-bdb2-9a2242c7a827',
            email: 'test@mail.com',
          },
          loginOrRegister,
          logout,
        }}
      >
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Welcome test@mail.com')).toBeInTheDocument()
  })

  test('should show share movie and logout button when user is authenticated', () => {
    render(
      <AuthContext.Provider
        value={{
          auth: {
            accessToken:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIyOTM2ODhjNy0xYTIwLTRmMzYtOGRlYS04YTJiNjEwMjEyNGIiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2ODg4MjgwODEsImV4cCI6MTcyMDM4NTAwN30.LVvt_Yrd1R7AWe18gH_RkJc8gHGQBoIqSDidElc4T2o',
            userId: '0a09c615-0370-4863-bdb2-9a2242c7a827',
            email: 'test@mail.com',
          },
          loginOrRegister,
          logout,
        }}
      >
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </AuthContext.Provider>,
    )

    expect(screen.getByText('Share a movie')).toBeInTheDocument()
    expect(screen.getByText('Logout')).toBeInTheDocument()
  })
})
