import React from 'react';
import { useHistory } from 'react-router-dom';
import NewScheduleForm from './components/Newscheduleform/Newscheduleform';
import FormHeader from '../../components/Formheader/Formheader';
import FormModal from '../../components/Formmodalsuccess/Formmodalsuccess';
import Error from '../../components/Error/Error';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';
import modalReducer, { initialState } from '../../reducers/Modal.reducer';
import { getAllPetsService } from '../../services/Pets.service';
import { AuthContext } from '../../context/Auth.context';

const NewSchedulePage = () => {
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const [pets, setPets] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const { token } = React.useContext(AuthContext);
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

  React.useEffect(() => {
    const getAllOwners = async () => {
      try {
        const pets = await getAllPetsService(token);
        setPets(pets);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getAllOwners();
  }, [token]);

  return (
    <React.Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <React.Fragment>
          {error ? (
            <Error title="Lo sentimos, ha ocurrido un problema" />
          ) : (
            <React.Fragment>
              <FormHeader redirectTo="/home/schedule" />
              <NewScheduleForm showModalSuccess={showModalSuccess} showModalError={showModalError} pets={pets} />
              <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
                <FormModal
                  title="Agenmiento registrado"
                  description="Pueder ver la información en la sección de agendamientos"
                />
              </Modal>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default NewSchedulePage;
