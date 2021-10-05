import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EditPetForm from './components/Editpetform/Editpetform';
import FormHeader from '../../components/Formheader/Formheader';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import { getPetByIdService } from '../../services/Pets.service';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';
import { AuthContext } from '../../context/Auth.context';

const EditPetPage = () => {
  const [pet, setPet] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();
  const { pet_id } = useParams();
  const { token } = React.useContext(AuthContext);

  React.useEffect(() => {
    const getEmployeeById = async () => {
      try {
        const pet = await getPetByIdService(pet_id, token);
        setPet(pet);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getEmployeeById();
  }, [pet_id, token]);

  const closeModal = React.useCallback(() => {
    dispatch({ type: 'CLOSE_MODAL' });
    history.push('/home/pets');
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
              message="No ha sido posible cargar la información de la mascota"
            />
          ) : (
            <React.Fragment>
              <FormHeader redirectTo="/home/pets" />
              <EditPetForm pet={pet} petId={pet_id} showModalSuccess={showModalSuccess} showModalError={showModalError} />
              <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
                <FormModal title="Mascota registrada" description="Pueder ver la información en la sección de mascotas" />
              </Modal>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EditPetPage;
