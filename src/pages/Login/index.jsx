import React from 'react';
import Login from './components/Login/Login';
import LoginForm from './components/Loginform/Loginform';
import Modal from '../../components/Modal/Modal';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const LoginPage = () => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
  }, []);

  const showModalError = React.useCallback(errorMessage => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: errorMessage });
  }, []);

  return (
    <React.Fragment>
      <Login />
      <LoginForm showModalError={showModalError} />
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal} />
    </React.Fragment>
  );
};

export default LoginPage;
