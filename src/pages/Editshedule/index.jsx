import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EditScheduleForm from './components/Editscheduleform/Editscheduleform';
import FormHeader from '../../components/Formheader/Formheader';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Modal from '../../components/Modal/Modal';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const EditSchedulePage = () => {
  const { schedule_id } = useParams();
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    history.push('/home/schedule');
  }, [history]);

  const showModalSuccess = React.useCallback(() => {
    dispatch({ type: 'SHOW_MODAL_SUCCESS' });
  }, []);

  const showModalError = React.useCallback(errorMessage => {
    dispatch({ type: 'SHOW_MODAL_ERROR', payload: errorMessage });
  }, []);

  return (
    <React.Fragment>
      <FormHeader redirectTo="/home/schedule" />
      <EditScheduleForm showModalSuccess={showModalSuccess} showModalError={showModalError} scheduleId={schedule_id} />
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <FormModal title="Agendamiento actualizado" />
      </Modal>
    </React.Fragment>
  );
};

export default EditSchedulePage;
