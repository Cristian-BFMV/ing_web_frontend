import React from 'react';
import { useHistory } from 'react-router-dom';
import PetModal from '../Petmodal/Petmodal';
import Modal from '../../../../components/Modal/Modal';
import { AuthContext } from '../../../../context/Auth.context';
import * as petService from '../../../../services/Pets.service';
import modalReducer, { initialState } from '../../../../reducers/Modal.reducer';

const PetCard = ({ _id, name, breed, size, age, vaccinePlan, attendance }) => {
  const { token } = React.useContext(AuthContext);
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const deleteOwner = React.useCallback(
    async petId => {
      try {
        await petService.deletePetService(petId, token);
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
          <h3 className="card-name">{name}</h3>
        </div>
        <div className="card-body">
          <p className="card-description">{breed}</p>
          <p className="card-description">{size}</p>
          <p className="card-description">{age}</p>
          <p className="card-description">{vaccinePlan}</p>
          <p className="card-description">{attendance}</p>
        </div>
        <div className="card-footer">
          <button className="card-button card-edit" onClick={() => history.push(`/editpet/${_id}`)}>
            Editar
          </button>
          <button className="card-button card-delete" onClick={() => deleteOwner(_id)}>
            Eliminar
          </button>
        </div>
      </div>
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <PetModal />
      </Modal>
    </React.Fragment>
  );
};

export default PetCard;
