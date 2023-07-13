import { useContext } from 'react'

import { SocketContext, SocketContextValue } from '../contexts'

export const useSocket = (): SocketContextValue => useContext(SocketContext)
