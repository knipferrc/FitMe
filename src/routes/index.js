import ClientManagementRoute from './ClientManagement'
import DashboardRoute from './Dashboard'
import ExerciseBuilderRoute from './ExerciseBuilder'
import LandingRoute from './Landing'
import LiveChatRoute from './LiveChat'
import MyProfileRoute from './MyProfile'
import MyScheduleRoute from './MySchedule'
import ProtectedRoute from '../components/ProtectedRoute'
import PublicRoute from '../components/PublicRoute'
import React from 'react'
import { Switch } from 'react-router-dom'
import WorkoutBuilderRoute from './WorkoutBuilder'

export default () => (
  <Switch>
    <PublicRoute path="/" exact component={LandingRoute} />
    <ProtectedRoute path="/dashboard" exact component={DashboardRoute} />
    <ProtectedRoute
      path="/client-management"
      exact
      component={ClientManagementRoute}
    />
    <ProtectedRoute
      path="/workout-builder"
      exact
      component={WorkoutBuilderRoute}
    />
    <ProtectedRoute
      path="/exercise-builder"
      exact
      component={ExerciseBuilderRoute}
    />
    <ProtectedRoute path="/my-schedule" exact component={MyScheduleRoute} />
    <ProtectedRoute path="/live-chat" exact component={LiveChatRoute} />
    <ProtectedRoute path="/my-profile" exact component={MyProfileRoute} />
  </Switch>
)
