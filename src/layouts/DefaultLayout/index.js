import MainMenu from '../../components/MainMenu'
import Navbar from '../../components/Navbar'
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

const DefaultLayout = ({ children }) => (
  <DefaultLayoutContainer>
    <Navbar />
    <MainMenuContainer>
      <MainMenu />
    </MainMenuContainer>
    <ContentContainer>{children}</ContentContainer>
  </DefaultLayoutContainer>
)

DefaultLayout.propTypes = {
  children: PropTypes.node
}

export default DefaultLayout
