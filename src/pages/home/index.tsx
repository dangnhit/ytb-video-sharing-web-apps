import { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast'

import VideoItem from '../../components/VideoItem'
import { useAuthentication, useSocket } from '../../hooks'
import { IVideo } from '../../interfaces'
import { useRefetchListMutate } from '../../services/video/mutate'
import { useGetVideos } from '../../services/video/queries'
import { WsConstants } from '../../utils'

const Home = () => {
  const [videos, setVideos] = useState<IVideo[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const { data: videosData } = useGetVideos(10, 1)
  const { mutateAsync: onGetVideosMutate } = useRefetchListMutate()

  const { socket } = useSocket()

  const { auth } = useAuthentication()

  useEffect(() => {
    if (socket && auth) {
      socket.on(WsConstants.VIDEO_ADDED, (data: IVideo) => {
        if (auth.email !== data.sharedBy?.email)
          toast.success(`Added a new video with title is ${data.title} by ${data.sharedBy?.email}`, { duration: 5000 })
      })
    }

    return () => {
      socket?.off(WsConstants.VIDEO_ADDED)
    }
  }, [socket])

  useEffect(() => {
    if (videosData?.data?.body) {
      if (loading) {
        setVideos([...videos, ...videosData.data.body])
      } else {
        setVideos(videosData.data.body)
      }
      setTotalPages(videosData?.data?.totalPages || totalPages)
    }
    setLoading(false)
  }, [videosData])

  const onLoadmore = async () => {
    setCurrentPage(currentPage + 1)
    setLoading(true)
    await onGetVideosMutate({ limit: 10, currentPage: currentPage + 1 })
  }

  return (
    <div className='flex flex-col items-center justify-center gap-10 mt-4 mb-4'>
      {videos?.map((video: IVideo) => (
        <VideoItem key={video.id} data={video} />
      ))}
      {totalPages !== currentPage && (
        <button type='button' className='border border-gray-300 rounded px-4 py-1 text-sm' onClick={() => onLoadmore()}>
          {loading ? 'Loading...' : 'Loadmore'}
        </button>
      )}
    </div>
  )
}

export default Home
