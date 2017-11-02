import DefaultLayout from 'layouts/DefaultLayout'
import React from 'react'

const HomeView = ({ user }) => {
  return (
    <DefaultLayout user={user}>
      <div>
        <div>Home</div>
      </div>
    </DefaultLayout>
  )
}

export default HomeView
