import React, { Fragment } from 'react'

import Navbar from '../../components/Navbar'
import PageLoader from '../../components/PageLoader'
import PropTypes from 'prop-types'
import MainMenu from '../../components/MainMenu'
import styled from 'styled-components'
import withData from './withData'

const DefaultLayoutContainer = styled.div`
  display: flex;
  height: 100%;
  padding-bottom: 64px;
`

const MainMenuContainer = styled.div`
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
        <MainMenuContainer>
          <MainMenu />
        </MainMenuContainer>
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

export default withData(DefaultLayout)
