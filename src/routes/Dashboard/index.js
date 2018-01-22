import { Redirect, Route } from 'react-router-dom'

import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'

const Dashboard = () => (
  <Route
    render={() =>
      1 === 1 ? (
        <DefaultLayout>
          <div style={{ height: 10000 }}>dashboard</div>
        </DefaultLayout>
      ) : (
        <Redirect to="/" />
      )
    }
  />
)

export default Dashboard
