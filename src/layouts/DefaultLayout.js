import MainMenu from 'components/MainMenu'
import Navbar from 'components/Navbar'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

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

const DefaultLayout = ({ currentUser, history, location, children }) => (
  <DefaultLayoutContainer>
    <Navbar currentUser={currentUser} location={location} history={history} />
    <MainMenuContainer>
      <MainMenu
        currentUser={currentUser}
        history={history}
        location={location}
      />
    </MainMenuContainer>
    <ContentContainer>{children}</ContentContainer>
  </DefaultLayoutContainer>
)

DefaultLayout.propTypes = {
  currentUser: PropTypes.shape({
    _id: PropTypes.string,
    role: PropTypes.string,
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string
  }),
  history: PropTypes.object,
  location: PropTypes.object,
  children: PropTypes.node
}

export default DefaultLayout
