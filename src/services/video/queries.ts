import { useQuery } from 'react-query'

import { requestHandler } from '../../utils'
import { IResponseList, IVideo } from '../../interfaces'

export function useGetVideos(limit: string | number, currentPage: string | number) {
  return useQuery(
    'get-videos',
    (): Promise<IResponseList<IVideo>> => requestHandler.get(`videos?limit=${limit || 10}&currentPage=${currentPage || 1}`),
  )
}
