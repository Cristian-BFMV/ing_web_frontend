import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EditEmployeeForm from './components/Editemployeeform/Editemployeeform';
import FormHeader from '../../components/Formheader/Formheader';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import { getEmployeeByIdService } from '../../services/Employees.service';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const EditEmployeePage = () => {
  const [employee, setEmployee] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();
  const { employee_id } = useParams();

  React.useEffect(() => {
    const getEmployeeById = async () => {
      try {
        const employee = await getEmployeeByIdService(employee_id);
        setEmployee(employee);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getEmployeeById();
  }, [employee_id]);

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
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error
              title="Lo sentimos, ha ocurrido un problema"
              message="No ha sido posible cargar la información del empleado"
            />
          ) : (
            <React.Fragment>
              <FormHeader redirectTo="/home/employees" />
              <EditEmployeeForm
                employee={employee}
                employeeId={employee_id}
                showModalSuccess={showModalSuccess}
                showModalError={showModalError}
              />
              <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
                <FormModal title="Empleado actualizado" description="Pueder ver la información en la sección de empleados" />
              </Modal>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditEmployeePage;
