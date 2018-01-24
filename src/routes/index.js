import React, { Fragment } from 'react'

import AdminDashboardRoute from './AdminRoutes/AdminDashboard'
import AdminRoute from 'components/AdminRoute'
import ClientDashboard from './ClientRoutes/ClientDashboard'
import ClientRoute from 'components/ClientRoute'
import LandingRoute from './PublicRoutes/Landing'
import PageLoader from 'components/PageLoader'
import PropTypes from 'prop-types'
import PublicRoute from 'components/PublicRoute'
import { Switch } from 'react-router-dom'
import TrainerClientManagementRoute from './TrainerRoutes/TrainerClientManagement'
import TrainerDashboardRoute from './TrainerRoutes/TrainerDashboard'
import TrainerExerciseBuilderRoute from './TrainerRoutes/TrainerExerciseBuilder'
import TrainerLiveChatRoute from './TrainerRoutes/TrainerChat'
import TrainerProfileRoute from './TrainerRoutes/TrainerProfile'
import TrainerRoute from 'components/TrainerRoute'
import TrainerScheduleRoute from './TrainerRoutes/TrainerSchedule'
import TrainerWorkoutBuilderRoute from './TrainerRoutes/TrainerWorkoutBuilder'
import withData from './withData'

const Routes = ({ loading, currentUser }) => (
  <Fragment>
    {loading ? (
      <PageLoader />
    ) : (
      <Switch>
        {/* PUBLIC ROUTES */}
        <PublicRoute
          path="/"
          exact
          component={LandingRoute}
          currentUser={currentUser}
        />

        {/* TRAINER ROUTES */}
        <TrainerRoute
          path="/trainer-dashboard"
          exact
          component={TrainerDashboardRoute}
          currentUser={currentUser}
        />
        <TrainerRoute
          path="/trainer-client-management"
          exact
          component={TrainerClientManagementRoute}
          currentUser={currentUser}
        />
        <TrainerRoute
          path="/trainer-workout-builder"
          exact
          component={TrainerWorkoutBuilderRoute}
          currentUser={currentUser}
        />
        <TrainerRoute
          path="/trainer-exercise-builder"
          exact
          component={TrainerExerciseBuilderRoute}
          currentUser={currentUser}
        />
        <TrainerRoute
          path="/trainer-schedule"
          exact
          component={TrainerScheduleRoute}
          currentUser={currentUser}
        />
        <TrainerRoute
          path="/trainer-chat"
          exact
          component={TrainerLiveChatRoute}
          currentUser={currentUser}
        />
        <TrainerRoute
          path="/trainer-profile"
          exact
          component={TrainerProfileRoute}
          currentUser={currentUser}
        />

        {/* CLIENT ROUTES */}
        <ClientRoute
          path="/client-dashboard"
          exact
          component={ClientDashboard}
          currentUser={currentUser}
        />

        {/* ADMIN ROUTES */}
        <AdminRoute
          path="/admin-dashboard"
          exact
          component={AdminDashboardRoute}
          currentUser={currentUser}
        />
      </Switch>
    )}
  </Fragment>
)

Routes.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    role: PropTypes.string
  })
}

export default withData(Routes)
