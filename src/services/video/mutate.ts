import { useMutation, useQueryClient } from 'react-query'

import { IResponse, IResponseList, IVideo } from '../../interfaces'
import { requestHandler } from '../../utils'

export function useSharingMutate() {
  return useMutation((payload: { url: string }): Promise<IResponse<IVideo>> => requestHandler.post('videos', payload))
}

export function useRefetchListMutate() {
  const queryClient = useQueryClient()

  return useMutation(
    (payload: { limit: number; currentPage: number }): Promise<IResponseList<IVideo>> =>
      requestHandler.get(`videos?limit=${payload.limit || 10}&currentPage=${payload.currentPage || 1}`),
    {
      onSuccess: data => {
        if (data?.success) {
          queryClient.setQueryData('get-videos', data)
        }
      },
    },
  )
}
