import { Fragment } from 'react';
import Spinner from '../Spinner/Spinner';
import Petsgarden from '../../assets/Petsgarden.PNG';
import './Form.css';

const Form = ({ title, onSubmit, isSubmitting, buttonText, children }) => {
  return (
    <div className="container">
      <img src={Petsgarden} alt="Pets Garden" className="form-header-logo" />
      <div className="form-container">
        <div className="form-header">
          <h2 className="form-title">{title}</h2>
        </div>
        <form className="form" onSubmit={onSubmit}>
          <Fragment>
            {children}
            {isSubmitting ? (
              <Spinner />
            ) : (
              <button className="form-button" type="submit">
                {buttonText}
              </button>
            )}
          </Fragment>
        </form>
      </div>
    </div>
  );
};

export default Form;
