import React, { Fragment } from 'react'

import Meta from '../../components/Meta'
import Navbar from '../../components/Navbar'

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Meta />
    <Navbar />
    <div className="container">{children}</div>
  </Fragment>
)

export default DefaultLayout
