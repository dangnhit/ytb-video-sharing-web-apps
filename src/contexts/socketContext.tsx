import { ReactNode, createContext, useEffect } from 'react'
import { Socket, io } from 'socket.io-client'

export type SocketContextValue = {
  socket: Socket | null
}

export const SocketContext = createContext<SocketContextValue>({
  socket: null,
})

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const socket = io(process.env.REACT_APP_BASE_URL ?? 'http://localhost:5001', {
    reconnectionDelay: 3000,
    autoConnect: true,
    withCredentials: false,
    reconnection: true,
  })

  useEffect(() => {
    socket.connect()
    console.log('Connected: ', socket)

    return () => {
      socket.disconnect()
    }
  }, [])

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>
}

export const SocketConsumer = SocketContext.Consumer
