import * as React from 'react'
import Navbar from '../../components/Navbar'

interface IDefaultLayoutProps {
  children: any
}

const DefaultLayout: React.SFC<IDefaultLayoutProps> = ({ children }) => (
  <div>
    <Navbar />
    {children}
  </div>
)

export default DefaultLayout
