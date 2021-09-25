import { Fragment } from 'react';
import ModalError from './Modalerror';
import close from '../../assets/close.svg';
import './Modal.css';

const Modal = ({ show, error, errorMessage, children, closeModal }) => {
  return (
    <div className={`modal ${show ? 'display-block' : 'display-none'}`} onClick={closeModal}>
      <section className="modal-main">
        <div className="modal-close">
          <div className="modal-close-container" onClick={closeModal}>
            <img src={close} alt="Close" className="modal-close-image" />
          </div>
        </div>
        {error ? <ModalError text={errorMessage} /> : <Fragment>{children}</Fragment>}
      </section>
    </div>
  );
};

export default Modal;
