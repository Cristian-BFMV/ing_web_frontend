import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EmployeeSignupForm from './components/Employeesignupform/Employeesignupform';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Modal from '../../components/Modal/Modal';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const EmployeeSignUpPage = () => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const { employee_id } = useParams();
  const history = useHistory();

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    history.push('/login');
  }, [history]);

  const showModalSuccess = React.useCallback(() => {
    dispatch({ type: 'SHOW_MODAL_SUCCESS' });
  }, []);

  const showModalError = React.useCallback(errorMessage => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: errorMessage });
  }, []);

  return (
    <React.Fragment>
      <EmployeeSignupForm employee_id={employee_id} showModalSuccess={showModalSuccess} showModalError={showModalError} />
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <FormModal title="Datos de sesión actualizados" />
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeSignUpPage;
