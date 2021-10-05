import React from 'react';
import { useHistory } from 'react-router-dom';
import NewEmployeeForm from './components/Newemployeeform/Newemployeeform';
import FormHeader from '../../components/Formheader/Formheader';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Modal from '../../components/Modal/Modal';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const NewEmployeePage = () => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    history.push('/home/employees');
  }, [history]);

  const showModalSuccess = React.useCallback(() => {
    dispatch({ type: 'SHOW_MODAL_SUCCESS' });
  }, []);

  const showModalError = React.useCallback(errorMessage => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: errorMessage });
  }, []);

  return (
    <React.Fragment>
      <FormHeader redirectTo="/home/employees" />
      <NewEmployeeForm showModalSuccess={showModalSuccess} showModalError={showModalError} />
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <FormModal title="Empleado registrado" description="Pueder ver la información en la sección de empleados" />
      </Modal>
    </React.Fragment>
  );
};

export default NewEmployeePage;
