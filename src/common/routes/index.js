import App from 'common/components/App'
import HomeRoute from './Home'
import NotFoundRoute from './NotFound'

const routes = [
  {
    component: App,
    routes: [HomeRoute, NotFoundRoute]
  }
]

export default routes
