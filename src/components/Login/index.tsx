import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useAuthentication } from '../../hooks'
import { IUser } from '../../interfaces'
import { isEmail } from '../../utils'

const LoginForm = () => {
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true)
  const [user, setUser] = useState<IUser>({ email: '', password: '' })

  const { auth, loginOrRegister, logout } = useAuthentication()

  const navigate = useNavigate()

  const onEmailChanged = (email: string) => {
    setUser({
      ...user,
      email,
    })
    if (isEmail(email) && user.password) setButtonDisabled(false)
    else setButtonDisabled(true)
  }

  const onPasswordChanged = (password: string) => {
    setUser({
      ...user,
      password,
    })
    if (user.email && isEmail(user.email) && password) setButtonDisabled(false)
    else setButtonDisabled(true)
  }

  const onLoginOrRegister = () => {
    loginOrRegister(user)
  }

  const onShareMovie = () => {
    navigate('/share')
  }

  const onLogout = () => {
    logout()
  }

  return auth?.accessToken ? (
    <div className='md:flex gap-3 items-center'>
      <p>Welcome {auth?.email}</p>
      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm sm:w-auto px-5 py-1.5 text-center w-full mt-1 md:mt-0'
        onClick={() => onShareMovie()}
      >
        Share a movie
      </button>

      <button
        type='button'
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm sm:w-auto px-5 py-1.5 text-center w-full mt-1 md:mt-0'
        onClick={() => onLogout()}
      >
        Logout
      </button>
    </div>
  ) : (
    <div className='md:flex gap-3 items-center'>
      <input
        type='email'
        className='border border-gray-300 text-gray-900 text-sm rounded p-1.5 focus:ring-blue-500 focus:border-blue-500 w-full mt-1 md:mt-0'
        placeholder='Email'
        onChange={e => onEmailChanged(e.target.value)}
      />
      <input
        type='password'
        className='border border-gray-300 text-gray-900 text-sm rounded p-1.5 focus:ring-blue-500 focus:border-blue-500 w-full mt-1 md:mt-0'
        placeholder='Password'
        onChange={e => onPasswordChanged(e.target.value)}
      />
      <button
        disabled={isButtonDisabled}
        type='submit'
        className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm sm:w-auto px-5 py-1.5 text-center w-full mt-1 md:mt-0'
        onClick={() => onLoginOrRegister()}
      >
        Login/Register
      </button>
    </div>
  )
}

export default LoginForm
