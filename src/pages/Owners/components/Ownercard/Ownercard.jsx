import React from 'react';
import { useHistory } from 'react-router-dom';
import OwnerModal from '../Ownermodal/Ownermodal';
import Modal from '../../../../components/Modal/Modal';
import { AuthContext } from '../../../../context/Auth.context';
import * as ownerService from '../../../../services/Owners.service';
import modalReducer, { initialState } from '../../../../reducers/Modal.reducer';

const OwnerCard = ({ _id, name, lastname, email, address, document, phonenumber }) => {
  const { token } = React.useContext(AuthContext);
  const [state, dispatch] = React.useReducer(modalReducer, initialState);
  const history = useHistory();

  const deleteOwner = React.useCallback(
    async ownerId => {
      try {
        await ownerService.deleteOwnerService(ownerId, token);
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
          <h3 className="card-name">{`${name} ${lastname}`}</h3>
        </div>
        <div className="card-body">
          <p className="card-description">{email}</p>
          <p className="card-description">{address}</p>
          <p className="card-description">{document}</p>
          <p className="card-description">{phonenumber}</p>
        </div>
        <div className="card-footer">
          <button className="card-button card-edit" onClick={() => history.push(`/editowner/${_id}`)}>
            Editar
          </button>
          <button className="card-button card-delete" onClick={() => deleteOwner(_id)}>
            Eliminar
          </button>
        </div>
      </div>
      <Modal show={state.showModal} error={state.error} errorMessage={state.errorMessage} closeModal={closeModal}>
        <OwnerModal />
      </Modal>
    </React.Fragment>
  );
};

export default OwnerCard;
