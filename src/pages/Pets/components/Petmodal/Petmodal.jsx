import { Fragment } from 'react';
import success from '../../../../assets/success.svg';

const PetModal = () => {
  return (
    <Fragment>
      <div className="modal-header">
        <img src={success} alt="Success" className="modal-image" />
      </div>
      <div className="modal-body">
        <h1 className="modal-title">Mascota Eliminada</h1>
      </div>
    </Fragment>
  );
};

export default PetModal;
