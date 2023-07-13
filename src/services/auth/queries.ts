import { useQuery } from 'react-query'

import { IAuth } from '../../interfaces'
import { localStorages } from '../../utils/localStorage'

export function useAuth() {
  return useQuery('auth', (): IAuth => localStorages.getCurrentUser())
}
