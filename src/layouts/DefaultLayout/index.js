import React, { PureComponent } from 'react';

import Navbar from 'components/Navbar';
import OffCanvas from 'components/OffCanvas';
import Sidebar from 'components/Sidebar';
import styled from 'styled-components';

const NavSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: none;
  }
`;

const ContentSection = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 55px;
  padding-left: 260px;
  overflow-y: auto;
  @media (max-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

export default class DefaultLayout extends PureComponent {
  state = {
    open: false
  };

  toggleOpen = value => {
    this.setState({
      open: value
    });
  };

  render() {
    const { children, user } = this.props;
    const { open } = this.state;

    return [
      <NavSection key="nav-section">
        <Navbar toggleOpen={this.toggleOpen} user={user} />
      </NavSection>,
      <SidebarSection key="navbar-section">
        <Sidebar user={user} />
      </SidebarSection>,
      <div key="off-canvas">
        {open && (
          <OffCanvas open={open} toggleOpen={this.toggleOpen} user={user} />
        )}
      </div>,
      <ContentSection key="content-section">{children}</ContentSection>
    ];
  }
}
