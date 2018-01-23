import React, { Fragment } from 'react'

import Navbar from '../../components/Navbar'
import PageLoader from '../../components/PageLoader'
import PropTypes from 'prop-types'
import Sidebar from '../../components/Sidebar'
import data from './data'
import styled from 'styled-components'

const DefaultLayoutContainer = styled.div`
  display: flex;
  height: 100%;
`

const SidebarContainer = styled.div`
  height: 100%;
  position: fixed;
  top: 64px;
  @media (max-width: 740px) {
    display: none;
  }
`

const ContentContainer = styled.div`
  margin-top: 64px;
  margin-left: 220px;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.05);
  @media (max-width: 740px) {
    margin-left: 0;
  }
`

const DefaultLayout = ({ loading, currentUser, children }) => (
  <DefaultLayoutContainer>
    {loading ? (
      <PageLoader />
    ) : (
      <Fragment>
        <Navbar user={currentUser} />
        <SidebarContainer>
          <Sidebar />
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Fragment>
    )}
  </DefaultLayoutContainer>
)

DefaultLayout.propTypes = {
  loading: PropTypes.bool,
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  children: PropTypes.node
}

export default data(DefaultLayout)
