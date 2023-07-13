import './App.css'

import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from 'react-query'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layouts'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider, SocketProvider } from './contexts'
import Home from './pages/home'
import Sharing from './pages/sharing'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
})

function App() {
  return (
    <div className='lg:flex lg:flex-col lg:items-center'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <SocketProvider>
              <Layout>
                <Routes>
                  <Route index element={<Home />} />
                  <Route
                    path='share'
                    element={
                      <ProtectedRoute>
                        <Sharing />
                      </ProtectedRoute>
                    }
                  />
                </Routes>
              </Layout>
            </SocketProvider>
          </AuthProvider>
        </BrowserRouter>
        <Toaster position='top-right' toastOptions={{ duration: 5000 }} />
      </QueryClientProvider>
    </div>
  )
}

export default App
