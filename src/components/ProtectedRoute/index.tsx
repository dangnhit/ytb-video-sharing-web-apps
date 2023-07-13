import { Navigate } from 'react-router-dom'

import { useAuthentication } from '../../hooks'

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { auth } = useAuthentication()

  if (!auth?.accessToken) {
    return <Navigate to='/' replace />
  }

  return children
}

export default ProtectedRoute
