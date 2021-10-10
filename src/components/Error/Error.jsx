import errormessage from '../../assets/error-message.svg';
import './Error.css';

const ErrorMessage = ({ title, message }) => {
  return (
    <div className="error-message-container">
      <div className="error-message-header">
        <img src={errormessage} alt="Error Message" className="error-message-image" />
      </div>
      <div className="error-message-body">
        <h2 className="error-message-title">{title}</h2>
        <p className="error-message-description">{message}</p>
      </div>
    </div>
  );
};

export default ErrorMessage;
