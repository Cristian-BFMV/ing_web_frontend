import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from './components/Header/Header';
import PetServices from './components/Petservices/Petservices';
import { AuthContext } from '../../context/Auth.context';

const HomePage = () => {
  const { isLoggedIn } = React.useContext(AuthContext);

  return (
    <React.Fragment>
      {isLoggedIn ? (
        <Redirect to="/home" />
      ) : (
        <React.Fragment>
          <Header />
          <PetServices />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default HomePage;
