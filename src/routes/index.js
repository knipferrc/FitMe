import AdminRoute from 'components/AdminRoute'
import AdminsDashboard from './AdminRoutes/Dashboard'
import ClientRoute from 'components/ClientRoute'
import ClientsDashboard from './ClientRoutes/Dashboard'
import Landing from './PublicRoutes/Landing'
import ForgotPassword from './PublicRoutes/ForgotPassword'
import ResetPassword from './PublicRoutes/ResetPassword'
import PublicRoute from 'components/PublicRoute'
import React from 'react'
import { Switch } from 'react-router-dom'
import TrainerRoute from 'components/TrainerRoute'
import TrainersAppointments from './TrainerRoutes/Appointments'
import TrainersClientManagement from './TrainerRoutes/ClientManagement'
import TrainersDashboard from './TrainerRoutes/Dashboard'
import TrainersExerciseBuilder from './TrainerRoutes/ExerciseBuilder'
import TrainersProfile from './TrainerRoutes/Profile'
import TrainersWorkoutBuilder from './TrainerRoutes/WorkoutBuilder'

const Routes = () => (
  <Switch>
    {/* PUBLIC ROUTES */}
    <PublicRoute exact path="/" component={Landing} />
    <PublicRoute exact path="/forgotPassword" component={ForgotPassword} />
    <PublicRoute exact path="/resetPassword" component={ResetPassword} />

    {/* TRAINER ROUTES */}
    <TrainerRoute
      exact
      path="/trainer/dashboard"
      component={TrainersDashboard}
    />
    <TrainerRoute
      exact
      path="/trainer/client-management"
      component={TrainersClientManagement}
    />
    <TrainerRoute
      exact
      path="/trainer/workout-builder"
      component={TrainersWorkoutBuilder}
    />
    <TrainerRoute
      exact
      path="/trainer/exercise-builder"
      component={TrainersExerciseBuilder}
    />
    <TrainerRoute
      exact
      path="/trainer/appointments"
      component={TrainersAppointments}
    />
    <TrainerRoute path="/trainer/profile" exact component={TrainersProfile} />

    {/* CLIENT ROUTES */}
    <ClientRoute exact path="/client/dashboard" component={ClientsDashboard} />

    {/* ADMIN ROUTES */}
    <AdminRoute exact path="/admin/dashboard" component={AdminsDashboard} />
  </Switch>
)

export default Routes
