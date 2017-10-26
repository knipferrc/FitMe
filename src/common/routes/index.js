import App from 'common/components/App'
import HomeRoute from './Home'
import LoginRoute from './Login'
import NotFoundRoute from './NotFound'

const routes = [
  {
    component: App,
    routes: [HomeRoute, LoginRoute, NotFoundRoute]
  }
]

export default routes
