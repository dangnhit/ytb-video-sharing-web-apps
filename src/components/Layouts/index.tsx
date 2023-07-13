import { IBaseProps } from '../../interfaces'
import Header from '../Header'

const Layout = ({ children }: IBaseProps) => {
  return (
    <div className='lg:w-10/12 lg:px-0 px-2'>
      <Header />
      {children}
    </div>
  )
}

export default Layout
