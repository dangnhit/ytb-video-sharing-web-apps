import { ReactNode, createContext, useEffect, useState } from 'react'

import { IAuth, IUser } from '../interfaces'
import { useAuth } from '../services/auth/queries'
import { useNavigate } from 'react-router-dom'
import { useAuthenMutate } from '../services/auth/mutate'
import { localStorages } from '../utils'

export type AuthContextValue = {
  auth: IAuth
  loginOrRegister: (auth: IUser) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextValue>({
  auth: { accessToken: '', email: '', userId: '' },
  loginOrRegister: () => null,
  logout: () => null,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [auth, setAuth] = useState<IAuth>(localStorages.getCurrentUser())

  const { data } = useAuth()
  const { mutate } = useAuthenMutate()

  const navigate = useNavigate()

  useEffect(() => {
    if (data) setAuth(data)
  }, [data])

  const loginOrRegister = (user: IUser) => {
    mutate({
      email: user.email,
      password: user.password,
    })
    setAuth(localStorages.getCurrentUser())
  }

  const logout = () => {
    setAuth({ accessToken: '', email: '', userId: '' })
    localStorages.removeCurrentUser()
    localStorages.removeToken()
    navigate('/', { replace: true })
  }

  return <AuthContext.Provider value={{ auth, loginOrRegister, logout }}>{children}</AuthContext.Provider>
}

export const AuthConsumer = AuthContext.Consumer
