import { Fragment } from 'react';
import success from '../../assets/success.svg';

const FormModalSuccess = ({ title, description }) => {
  return (
    <Fragment>
      <div className="modal-header">
        <img src={success} alt="Success" className="modal-image" />
      </div>
      <div className="modal-body">
        <h1 className="modal-title">{title}</h1>
        <p className="modal-text">{description}</p>
      </div>
    </Fragment>
  );
};

export default FormModalSuccess;
