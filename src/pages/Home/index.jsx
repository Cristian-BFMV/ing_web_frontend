import { Fragment } from 'react';
import Header from './components/Header/Header';
import PetServices from './components/Petservices/Petservices';

const HomePage = () => {
  return (
    <Fragment>
      <Header />
      <PetServices />
    </Fragment>
  );
};

export default HomePage;
