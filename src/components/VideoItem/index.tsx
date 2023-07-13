import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IVideo } from '../../interfaces'

type Props = {
  data: IVideo
}

const VideoItem = ({ data }: Props) => {
  return (
    <div className='flex md:flex-row flex-col items-start md:w-3/4 w-full gap-6'>
      <div className='md:w-2/4 w-full'>
        <iframe
          width='100%'
          height='321'
          src={`https://www.youtube.com/embed/${data.vid}`}
          id='iframe-ytb'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </div>
      <div className='flex flex-col gap-2 md:w-2/4 w-full'>
        <h3 className='font-bold text-rose-800'>{data.title}</h3>
        <div className='flex gap-1'>
          <p className='font-bold'>Shared by:</p>
          <p>{data.sharedBy?.email}</p>
        </div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center gap-2'>
            <p>{data.likeCount}</p>
            <FontAwesomeIcon icon={faThumbsUp} />
          </div>
          <div className='flex items-center gap-2'>
            <p>{data.dislikeCount}</p>
            <FontAwesomeIcon icon={faThumbsDown} />
          </div>
        </div>
        <div>
          <p className='font-bold'>Description:</p>
          <p className='text-justify'>{data.description}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoItem
