import React, { Fragment } from 'react'

import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'

const DefaultLayout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
  </Fragment>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
