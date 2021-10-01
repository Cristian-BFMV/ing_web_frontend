import { Fragment } from 'react';
import success from '../../../../assets/success.svg';

const NewOwnerModal = () => {
  return (
    <Fragment>
      <div className="modal-header">
        <img src={success} alt="Success" className="modal-image" />
      </div>
      <div className="modal-body">
        <h1 className="modal-title">Propietario registrado</h1>
        <p className="modal-text">Pueder ver la información en la sección de propietarios</p>
      </div>
    </Fragment>
  );
};

export default NewOwnerModal;
