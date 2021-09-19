import { Fragment } from 'react';
import Login from './components/Login/Login';
import LoginForm from './components/Loginform/Loginform';

const LoginPage = () => {
  return (
    <Fragment>
      <Login />
      <LoginForm />
    </Fragment>
  );
};

export default LoginPage;
