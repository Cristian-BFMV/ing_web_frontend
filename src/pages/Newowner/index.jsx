import React from 'react';
import { useHistory } from 'react-router-dom';
import NewOwnerForm from './components/Newownerform/Newownerform';
import NewOwnerHeader from './components/Newownerheader/Newownerheader';
import NewOwnerModal from './components/Newownermodal/Newownermodal';
import Modal from '../../components/Modal/Modal';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const NewOwnerPage = () => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    history.push('/home/owners');
  }, [history]);

  const showModalSuccess = React.useCallback(() => {
    dispatch({ type: 'SHOW_MODAL_SUCCESS' });
  }, []);

  const showModalError = React.useCallback(errorMessage => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: errorMessage });
  }, []);

  return (
    <React.Fragment>
      <NewOwnerHeader />
      <NewOwnerForm showModalSuccess={showModalSuccess} showModalError={showModalError} />
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <NewOwnerModal />
      </Modal>
    </React.Fragment>
  );
};

export default NewOwnerPage;
