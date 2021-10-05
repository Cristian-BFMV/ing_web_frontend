import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import EditOwnerForm from './components/Editownerform/Editownerform';
import FormHeader from '../../components/Formheader/Formheader';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import { getOwnerByIdService } from '../../services/Owners.service';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';

const EditOwnerPage = () => {
  const [owner, setOwner] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();
  const { owner_id } = useParams();

  React.useEffect(() => {
    const getEmployeeById = async () => {
      try {
        const owner = await getOwnerByIdService(owner_id);
        setOwner(owner);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getEmployeeById();
  }, [owner_id]);

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
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error
              title="Lo sentimos, ha ocurrido un problema"
              message="No ha sido posible cargar la información del propietario"
            />
          ) : (
            <React.Fragment>
              <FormHeader redirectTo="/home/owners" />
              <EditOwnerForm
                owner={owner}
                ownerId={owner_id}
                showModalSuccess={showModalSuccess}
                showModalError={showModalError}
              />
              <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
                <FormModal
                  title="Propietario Actualizado"
                  description="Pueder ver la información en la sección de proietarios"
                />
              </Modal>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditOwnerPage;
