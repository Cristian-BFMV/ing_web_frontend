import { Fragment } from 'react';
import error from '../../assets/error.svg';

const ModalError = ({ text }) => {
  return (
    <Fragment>
      <div className="modal-header">
        <img src={error} alt="Error" className="modal-image" />
      </div>
      <div className="modal-body">
        <h1 className="modal-title">¡Ops algo ha salido mal!</h1>
        <p className="modal-text">{text}</p>
      </div>
    </Fragment>
  );
};

export default ModalError;
