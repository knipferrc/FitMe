import { Box } from 'grid-styled';
import Card from 'components/Card';
import DefaultLayout from 'layouts/DefaultLayout';
import React from 'react';
import RegisterForm from '../../forms/RegisterForm';
import styled from 'styled-components';

const RegisterViewContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RegisterView = ({ history, user }) => {
  return (
    <DefaultLayout user={user}>
      <RegisterViewContainer>
        <Box width={[1, 1 / 2, 1 / 2]} p={1}>
          <Card title="Welcome to FitMe">
            <RegisterForm history={history} />
          </Card>
        </Box>
      </RegisterViewContainer>
    </DefaultLayout>
  );
};

export default RegisterView;
