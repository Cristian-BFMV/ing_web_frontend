import React from 'react';
import { useHistory } from 'react-router-dom';
import EmployeeModal from '../Employeemodal/Employeemodal';
import Modal from '../../../../components/Modal/Modal';
import { AuthContext } from '../../../../context/Auth.context';
import * as employeeService from '../../../../services/Employees.service';
import modalReducer, { initialState } from '../../../../reducers/Modal.reducer';

const EmployeeCard = ({ _id, name, last_name, email, role, username, document }) => {
  const { token } = React.useContext(AuthContext);
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const deleteEmployee = React.useCallback(
    async employeeId => {
      try {
        await employeeService.deleteEmployeeService(employeeId, token);
        dispatch({ type: 'SHOW_MODAL_SUCCESS' });
      } catch (error) {
        dispatch({ type: 'SHOW_MODAL_ERROR', payload: 'No ha sido posible eliminar este empleado' });
      }
    },
    [token]
  );

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    // eslint-disable-next-line no-restricted-globals
    location.reload();
  }, []);

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-header">
          <p className="card-role">{role}</p>
          <h3 className="card-name">{`${name} ${last_name}`}</h3>
        </div>
        <div className="card-body">
          <p className="card-description">{email}</p>
          <p className="card-description">{username}</p>
          <p className="card-description">{document}</p>
        </div>
        <div className="card-footer">
          <button className="card-button card-edit" onClick={() => history.push(`/editemployee/${_id}`)}>
            Editar
          </button>
          <button className="card-button card-delete" onClick={() => deleteEmployee(_id)}>
            Eliminar
          </button>
        </div>
      </div>
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <EmployeeModal />
      </Modal>
    </React.Fragment>
  );
};

export default EmployeeCard;
