import React, { Fragment } from 'react'

import PageLoader from '../PageLoader'
import withData from './withData'

const UserData = ({ loading, currentUser, children }) => (
  <Fragment>
    {loading ? (
      <PageLoader />
    ) : (
      <Fragment>{children({ currentUser })}</Fragment>
    )}
  </Fragment>
)

export default withData(UserData)
