import { useState } from 'react'
import { useSharingMutate } from '../../services/video/mutate'
import { useNavigate } from 'react-router-dom'

const Sharing = () => {
  const [url, setUrl] = useState<string>('')

  const { mutateAsync: onSharingMutate } = useSharingMutate()

  const navigate = useNavigate()

  const onChanged = (vUrl: string) => {
    setUrl(vUrl)
  }

  const onSharing = async () => {
    await onSharingMutate({ url })
    navigate('/', { replace: true })
  }

  return (
    <div className='flex items-center justify-center md:mt-40 mt-4'>
      <fieldset className='md:w-3/5 border-2 border-gray-600 rounded p-12'>
        <legend>Share a Youtube movie</legend>
        <p>Youtube URL</p>
        <div className='flex flex-col items-center gap-4 md:mt-[-30px]'>
          <input
            type='text'
            className='w-3/5 border border-gray-300 text-gray-900 text-sm rounded p-1.5 focus:ring-blue-500 focus:border-blue-500'
            onChange={e => onChanged(e.target.value)}
          />
          <button
            type='button'
            className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm w-auto px-5 py-1.5 text-center md:w-3/5'
            onClick={() => onSharing()}
          >
            Share
          </button>
        </div>
      </fieldset>
    </div>
  )
}

export default Sharing
