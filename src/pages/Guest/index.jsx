import React from 'react';
import { useHistory } from 'react-router-dom';
import Guest from './components/Guest/Guest';
import GuestForm from './components/Guestform/Guestform';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Modal from '../../components/Modal/Modal';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const GuestPage = () => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    history.push('/');
  }, [history]);

  const showModalSuccess = React.useCallback(() => {
    dispatch({ type: 'SHOW_MODAL_SUCCESS' });
  }, []);

  const showModalError = React.useCallback(errorMessage => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: errorMessage });
  }, []);

  return (
    <React.Fragment>
      <Guest />
      <GuestForm showModalSuccess={showModalSuccess} showModalError={showModalError} />
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <FormModal title="Email enviado" description="Revisa tu correo y encontraras el enlace de invitación" />
      </Modal>
    </React.Fragment>
  );
};

export default GuestPage;
