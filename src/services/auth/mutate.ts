import { useMutation, useQueryClient } from 'react-query'
import { localStorages, requestHandler } from '../../utils'
import { IAuth, IResponse, IUser } from '../../interfaces'

export function useAuthenMutate() {
  const queryClient = useQueryClient()

  return useMutation((payload: IUser): Promise<IResponse<IAuth>> => requestHandler.post('users/authenticate', payload), {
    onSuccess: data => {
      if (data.success && data.data) {
        localStorages.setCurrentUser(data.data)
        localStorages.setToken(data.data.accessToken || '')
        queryClient.refetchQueries('auth')
      }
    },
  })
}
