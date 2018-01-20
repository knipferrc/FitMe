import React from 'react'

import NavBar from '../../components/NavBar'

const DefaultLayout = ({ children }) => (
  <React.Fragment>
    <NavBar />
    {children}
  </React.Fragment>
)

export default DefaultLayout
