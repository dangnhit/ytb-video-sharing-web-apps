import { faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LoginForm from '../Login'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='md:flex items-center justify-between py-4 border-b border-stone-300 sticky top-0 bg-white'>
      <div className='flex items-center gap-2 cursor-pointer' onClick={() => navigate('/', { replace: true })}>
        <FontAwesomeIcon icon={faHome} size='2x' />
        <h1 className='font-bold'>Funny Movies</h1>
      </div>
      <LoginForm />
    </div>
  )
}

export default Header
