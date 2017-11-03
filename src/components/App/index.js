import React, { PureComponent } from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'

import { BrowserRouter } from 'react-router-dom'
import PageLoader from 'components/PageLoader'
import Routes from 'routes'
import { auth } from 'lib/firebase'
import theme from 'lib/theme'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 16px;
    color: #333;
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
  }
`

export default class App extends PureComponent {
  state = {
    user: null,
    authed: false,
    loading: true
  }

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          authed: true,
          loading: false
        })
      } else {
        this.setState({
          user: null,
          authed: false,
          loading: false
        })
      }
    })
  }

  componentWillUnmount() {
    this.removeListener()
  }

  render() {
    const { loading, authed, user } = this.state

    if (loading) {
      return <PageLoader />
    }

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes authed={authed} user={user} />
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}
