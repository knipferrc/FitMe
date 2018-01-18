import * as React from 'react'

import Navbar from '../../components/Navbar'

interface IDefaultLayoutProps {
  children: any
}

const DefaultLayout: React.SFC<IDefaultLayoutProps> = ({ children }) => (
  <React.Fragment>
    <Navbar />
    <div className="container">{children}</div>
  </React.Fragment>
)

export default DefaultLayout
