import DefaultLayout from 'layouts/DefaultLayout';
import React from 'react';

const DashboardView = ({ user }) => {
  return (
    <DefaultLayout user={user}>
      <h1>Dashboard</h1>
    </DefaultLayout>
  );
};

export default DashboardView;
