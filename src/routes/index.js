import AdminDashboardRoute from './AdminRoutes/AdminDashboard'
import AdminRoute from '../components/AdminRoute'
import ClientDashboard from './ClientRoutes/ClientDashboard'
import ClientRoute from '../components/ClientRoute'
import LandingRoute from './PublicRoutes/Landing'
import PublicRoute from '../components/PublicRoute'
import React from 'react'
import { Switch } from 'react-router-dom'
import TrainerAppointmentsRoute from './TrainerRoutes/TrainerAppointments'
import TrainerClientManagementRoute from './TrainerRoutes/TrainerClientManagement'
import TrainerDashboardRoute from './TrainerRoutes/TrainerDashboard'
import TrainerExerciseBuilderRoute from './TrainerRoutes/TrainerExerciseBuilder'
import TrainerLiveChatRoute from './TrainerRoutes/TrainerChat'
import TrainerProfileRoute from './TrainerRoutes/TrainerProfile'
import TrainerRoute from '../components/TrainerRoute'
import TrainerWorkoutBuilderRoute from './TrainerRoutes/TrainerWorkoutBuilder'

const Routes = () => (
  <Switch>
    {/* PUBLIC ROUTES */}
    <PublicRoute path="/" exact component={LandingRoute} />

    {/* TRAINER ROUTES */}
    <TrainerRoute
      path="/trainer-dashboard"
      exact
      component={TrainerDashboardRoute}
    />
    <TrainerRoute
      path="/trainer-client-management"
      exact
      component={TrainerClientManagementRoute}
    />
    <TrainerRoute
      path="/trainer-workout-builder"
      exact
      component={TrainerWorkoutBuilderRoute}
    />
    <TrainerRoute
      path="/trainer-exercise-builder"
      exact
      component={TrainerExerciseBuilderRoute}
    />
    <TrainerRoute
      path="/trainer-appointments"
      exact
      component={TrainerAppointmentsRoute}
    />
    <TrainerRoute path="/trainer-chat" exact component={TrainerLiveChatRoute} />
    <TrainerRoute
      path="/trainer-profile"
      exact
      component={TrainerProfileRoute}
    />

    {/* CLIENT ROUTES */}
    <ClientRoute path="/client-dashboard" exact component={ClientDashboard} />

    {/* ADMIN ROUTES */}
    <AdminRoute path="/admin-dashboard" exact component={AdminDashboardRoute} />
  </Switch>
)

export default Routes
