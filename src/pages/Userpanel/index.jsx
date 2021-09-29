import React from 'react';
import { Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { AuthContext } from '../../context/Auth.context';

const UserPanel = () => {
  const { isLoggedIn } = React.useContext(AuthContext);

  return <React.Fragment>{isLoggedIn ? <Layout /> : <Redirect to="/" />}</React.Fragment>;
};

export default UserPanel;
