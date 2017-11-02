import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { PureComponent } from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

import AuthorizedRoute from 'components/AuthorizedRoute';
import DashboardRoute from 'routes/Dashboard';
import HomeRoute from 'routes/Home';
import LoginRoute from 'routes/Login';
import NotFoundRoute from 'routes/NotFound';
import PageLoader from 'components/PageLoader';
import PublicRoute from 'components/PublicRoute';
import RegisterRoute from 'routes/Register';
import { auth } from 'lib/firebase';
import theme from 'lib/theme';

injectGlobal`
  * {
    box-sizing: border-box;
  }
  html, body {
    margin: 0;
    height: 100%;
    width: 100%;
    font-family: 'Source Sans Pro', "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 16px;
    color: #333;
    background: #E1E2E1;
  }
`;

export default class App extends PureComponent {
  state = {
    user: null,
    authed: false,
    loading: true
  };

  componentDidMount() {
    this.removeListener = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          user,
          authed: true,
          loading: false
        });
      } else {
        this.setState({
          user: null,
          authed: false,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { loading, authed, user } = this.state;

    if (loading) {
      return <PageLoader />;
    }

    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <PublicRoute exact authed={authed} path="/" component={HomeRoute} />
            <PublicRoute
              exact
              authed={authed}
              path="/login"
              component={LoginRoute}
            />
            <PublicRoute
              exact
              authed={authed}
              path="/register"
              component={RegisterRoute}
            />
            <AuthorizedRoute
              exact
              authed={authed}
              path="/dashboard"
              component={DashboardRoute}
              user={user}
            />
            <Route path="*" component={NotFoundRoute} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}
