import { useContext } from 'react'

import { AuthContext, AuthContextValue } from '../contexts'

export const useAuthentication = (): AuthContextValue => useContext(AuthContext)
