import { Fragment } from 'react';
import Guest from './components/Guest/Guest';
import GuestForm from './components/Guestform/Guestform';

const GuestPage = () => {
  return (
    <Fragment>
      <Guest />
      <GuestForm />
    </Fragment>
  );
};

export default GuestPage;
