import AdminDashboardRoute from './AdminRoutes/AdminDashboard'
import ClientDashboard from './ClientRoutes/ClientDashboard'
import LandingRoute from './PublicRoutes/Landing'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoute'
import React from 'react'
import { Switch } from 'react-router-dom'
import TrainerClientManagementRoute from './TrainerRoutes/TrainerClientManagement'
import TrainerDashboardRoute from './TrainerRoutes/TrainerDashboard'
import TrainerExerciseBuilderRoute from './TrainerRoutes/TrainerExerciseBuilder'
import TrainerLiveChatRoute from './TrainerRoutes/TrainerChat'
import TrainerProfileRoute from './TrainerRoutes/TrainerProfile'
import TrainerScheduleRoute from './TrainerRoutes/TrainerSchedule'
import TrainerWorkoutBuilderRoute from './TrainerRoutes/TrainerWorkoutBuilder'

const Routes = () => (
  <Switch>
    {/* PUBLIC ROUTES */}
    <PublicRoute path="/" exact component={LandingRoute} />

    {/* TRAINER ROUTES */}
    <ProtectedRoute
      path="/trainer-dashboard"
      exact
      component={TrainerDashboardRoute}
    />
    <ProtectedRoute
      path="/trainer-client-management"
      exact
      component={TrainerClientManagementRoute}
    />
    <ProtectedRoute
      path="/trainer-workout-builder"
      exact
      component={TrainerWorkoutBuilderRoute}
    />
    <ProtectedRoute
      path="/trainer-exercise-builder"
      exact
      component={TrainerExerciseBuilderRoute}
    />
    <ProtectedRoute
      path="/trainer-schedule"
      exact
      component={TrainerScheduleRoute}
    />
    <ProtectedRoute
      path="/trainer-chat"
      exact
      component={TrainerLiveChatRoute}
    />
    <ProtectedRoute
      path="/trainer-profile"
      exact
      component={TrainerProfileRoute}
    />

    {/* CLIENT ROUTES */}
    <ProtectedRoute
      path="/client-dashboard"
      exact
      component={ClientDashboard}
    />

    {/* ADMIN ROUTES */}
    <ProtectedRoute
      path="/admin-dashboard"
      exact
      component={AdminDashboardRoute}
    />
  </Switch>
)

export default Routes
