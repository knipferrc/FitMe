import React, { PureComponent } from 'react'

import Navbar from 'components/Navbar'
import OffCanvas from 'components/OffCanvas'
import Sidebar from 'components/Sidebar'
import firebase from 'lib/firebase'
import styled from 'styled-components'

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
`

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`

const ContentSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 55px;
  padding-left: 260px;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 5px;
  }
`

export default class DefaultLayout extends PureComponent {
  state = {
    open: false,
    user: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user
        })
      } else {
        this.setState({
          user: null
        })
      }
    })
  }

  toggleOpen = value => {
    this.setState({
      open: value
    })
  }

  render() {
    const { children } = this.props
    const { open, user } = this.state

    return [
      <NavSection key="nav-section">
        <Navbar toggleOpen={this.toggleOpen} user={user} />
      </NavSection>,
      <SidebarSection key="navbar-section">
        <Sidebar user={user} />
      </SidebarSection>,
      <div key="off-canvas">
        {open && <OffCanvas open={open} toggleOpen={this.toggleOpen} />}
      </div>,
      <ContentSection key="content-section">{children}</ContentSection>
    ]
  }
}
