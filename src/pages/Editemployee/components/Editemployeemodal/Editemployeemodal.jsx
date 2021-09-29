import { Fragment } from 'react';
import success from '../../../../assets/success.svg';

const EditEmployeeModal = () => {
  return (
    <Fragment>
      <div className="modal-header">
        <img src={success} alt="Success" className="modal-image" />
      </div>
      <div className="modal-body">
        <h1 className="modal-title">Empleado actualizado</h1>
        <p className="modal-text">Pueder ver la información en la sección de empleados</p>
      </div>
    </Fragment>
  );
};

export default EditEmployeeModal;
